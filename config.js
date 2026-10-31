// Configuración de Avisarnos: es el único archivo que hay que editar para
// armar una copia propia en otro barrio. Tiene dos partes.
//
// PARTE 1: datos de conexión al proyecto de Firebase.
//
// Estos datos los da Firebase cuando registrás la app web (Configuración del
// proyecto > Tus apps > SDK setup and configuration > Config). Se reemplaza
// cada valor entre comillas por el que te muestra Firebase.
//
// No son secretos: cualquier página que use Firebase los muestra. Lo que
// protege los datos son las reglas de seguridad (archivo firestore.rules),
// que se pegan en la consola de Firebase.

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAZRtWvyRShs_4qWmLICaYK_ty6-ZxiDqQ",
  authDomain: "avisarnosalsi.firebaseapp.com",
  projectId: "avisarnosalsi",
  storageBucket: "avisarnosalsi.firebasestorage.app",
  messagingSenderId: "795443105885",
  appId: "1:795443105885:web:5ec09285ae0def93093db4"
};

// PARTE 2: datos del lugar. Aparecen en los textos de la app.
// Si alguno no corresponde, dejalo entre comillas vacías ("") y la app lo omite.

window.AVISARNOS = {
  lugar: "Salsipuedes",          // aparece debajo del título del Tablero
  zona: "Sierras Chicas",        // zona del pronóstico del Servicio Meteorológico
  provincia: "Córdoba",          // para "Defensa Civil de ..."

  // Organismo de emergencias de la zona, si lo hay (aparece en Teléfonos útiles).
  organismoLocal: {
    sigla: "ETAC",
    nombre: "Equipo Técnico de Acción ante Catástrofes",
    telefono: "3541 65-3255"
  },

  // Teléfonos con los que arranca la lista de Teléfonos útiles.
  // Después se pueden cambiar desde la misma app, en la pestaña Guía.
  telefonos: {
    medicos: "107",
    defensaCivil: "103",
    bomberos: "100",
    ambiental: "105"
  }
};
