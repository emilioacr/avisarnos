// Service worker de Avisarnos.
// Copyright (C) 2026 theorIA. SPDX-License-Identifier: AGPL-3.0-only
// Guarda en el teléfono los archivos de la app para que abra aunque no haya
// señal. Los datos (casas, alertas, fondo) no pasan por acá: de esos se ocupa
// la copia local de Firestore.
//
// Cuando se cambie cualquier archivo de la app, subir el número de VERSION
// para que los teléfonos descarguen la versión nueva.

var VERSION = "avisarnos-v7";
var ARCHIVOS = [
  "./",
  "index.html",
  "config.js",
  "manifest.webmanifest",
  "icon.svg",
  "icon-192.png",
  "icon-512.png",
  "vendor/firebase-app-compat.js",
  "vendor/firebase-firestore-compat.js"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(VERSION).then(function (cache) { return cache.addAll(ARCHIVOS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (claves) {
      return Promise.all(claves.filter(function (k) { return k !== VERSION; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Firestore y otros sitios: sin tocar

  // Página y configuración: primero la red (para tener siempre lo último),
  // y si no hay señal, la copia guardada.
  var esPagina = req.mode === "navigate" || /\/(index\.html|config\.js)?$/.test(url.pathname);
  if (esPagina) {
    event.respondWith(
      fetch(req).then(function (res) {
        var copia = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copia); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (r) { return r || caches.match("index.html"); });
      })
    );
    return;
  }

  // El resto (librería de Firebase, íconos): primero la copia guardada.
  event.respondWith(
    caches.match(req).then(function (r) {
      return r || fetch(req).then(function (res) {
        var copia = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copia); });
        return res;
      });
    })
  );
});
