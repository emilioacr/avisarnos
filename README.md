# Avisarnos

Herramienta web de apoyo a un protocolo de emergencia vecinal ante inundación y corte de rutas, armada para una cuadra de Salsipuedes, Córdoba.

Cada casa carga su perfil (quién necesita ayuda prioritaria) y, cuando se declara alerta naranja o roja, reporta su estado con cuatro colores: verde (están bien), amarillo (problema que puede esperar), naranja (van a necesitar ayuda en unas horas) y rojo (necesitan ayuda ya). También tiene roles y tramos del circuito de llamado, teléfonos útiles, las recomendaciones oficiales por nivel de alerta y una lista para estar preparados antes de la temporada (lo que cada uno tilda queda solo en su teléfono).

## Cómo está hecha

- Una sola página, `index.html`, alojada gratis en GitHub Pages.
- Los datos compartidos viven en Cloud Firestore (Firebase, plan gratuito Spark).
- Funciona sin señal: la app queda guardada en el teléfono (`sw.js`) y Firestore guarda una copia local de los datos; lo que se carga sin conexión se envía solo cuando vuelve la señal.

## Archivos

- `index.html`: la app completa.
- `config.js`: datos de conexión al proyecto de Firebase y datos del lugar (nombre, zona, provincia, organismo local, teléfonos). Es el único archivo que hay que editar para armar una copia.
- `firestore.rules`: reglas de seguridad para pegar en la consola de Firebase.
- `sw.js`, `manifest.webmanifest`, `icon*`: lo que permite instalarla en el celular y abrirla sin señal.
- `vendor/`: la librería de Firebase (versión 13.1.0, licencia Apache 2.0), copiada acá para no depender de servidores externos.
- `importar.html`: copia a la base datos que tengas en un archivo .json (por ejemplo, los de una versión anterior). Los datos no están en el repositorio: se eligen desde el dispositivo de quien importa.
- `LICENSE`: texto completo de la licencia AGPL-3.0.
- `REPLICAR.md`: guía para armar Avisarnos en otro barrio.

## Para armarla en otro barrio

Cada barrio arma su propia copia, con su propia base de datos. No hace falta programar: todo lo local se configura en `config.js`. La guía paso a paso está en [REPLICAR.md](REPLICAR.md).

Esto nunca reemplaza el llamado oficial ante riesgo real: 107 (emergencias médicas), 103 (Defensa Civil), 100 (Bomberos).

## Licencia

Copyright (C) 2026 theorIA.

Avisarnos es software libre, publicado bajo la [Licencia Pública General Affero de GNU, versión 3](LICENSE) (AGPL-3.0). Podés usarlo, copiarlo, modificarlo y redistribuirlo. Si publicás una versión modificada, tenés que compartir su código fuente con la misma licencia, y eso incluye ponerla en internet para que otros la usen aunque no la distribuyas como archivo.

Las recomendaciones por nivel de alerta están redactadas a partir de la página [Fenómeno El Niño](https://www.argentina.gob.ar/seguridad/emergencias/elnino) de la Agencia Federal de Emergencias; la fuente oficial es esa página.

La librería de Firebase incluida en `vendor/` es de Google LLC y tiene su propia licencia, Apache 2.0, compatible con la AGPL-3.0.
