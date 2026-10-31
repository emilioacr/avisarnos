# Cómo armar Avisarnos en tu barrio

Avisarnos es una app web gratuita para que los vecinos de una cuadra o un barrio se avisen cómo está cada casa cuando hay un temporal, una inundación o un corte de rutas. Cada barrio arma su propia copia: los datos de tus vecinos quedan en tu cuenta y no en la de nadie más.

No hace falta saber programar. Lleva unos 40 minutos y es más cómodo hacerlo desde una computadora.

## Qué necesitás

- **Una cuenta de Google con la verificación en 2 pasos activada.** Firebase, el servicio que guarda los datos, la exige. Se activa en myaccount.google.com, sección Seguridad. Usá una cuenta que no vayas a perder, porque va a ser la dueña de los datos del barrio, y guardá en papel los códigos de seguridad que ofrece Google por si perdés el celular.
- **Una cuenta de GitHub**, gratis, en github.com. Ahí va a vivir la página.

## Paso 1: copiar la app

1. Entrá con tu cuenta a [github.com/emilioacr/avisarnos](https://github.com/emilioacr/avisarnos).
2. Arriba a la derecha tocá **Fork**.
3. En "Repository name" dejá `avisarnos` o poné otro nombre corto, sin espacios. Ese nombre va a formar parte de la dirección de tu app.
4. Tocá **Create fork**.

Ya tenés tu copia en `github.com/TU-USUARIO/avisarnos`.

## Paso 2: crear la base de datos

1. Entrá a [console.firebase.google.com](https://console.firebase.google.com) y tocá **Crear un proyecto** ("Create a project"). Ponele un nombre, por ejemplo `avisarnos-tubarrio`. Si te ofrece Google Analytics, desactivalo. Si te ofrece Gemini, saltealo.
2. El proyecto arranca en el plan gratuito, Spark, que no pide tarjeta. No toques nunca "Actualizar" ("Upgrade") ni vincules una cuenta de facturación.
3. En el menú de la izquierda entrá a **Bases de datos y almacenamiento** ("Databases & Storage"), después a **Firestore**, y tocá **Crear base de datos**.
   - Edición: Standard.
   - Identificador: dejá el que viene, `(default)`.
   - Ubicación: `southamerica-east1` (San Pablo), la más cercana para Argentina. No se puede cambiar después.
   - Modo: **producción**.
4. Dentro de Firestore, pestaña **Reglas** ("Rules"): borrá todo el texto que aparece. En tu copia de GitHub abrí el archivo `firestore.rules`, tocá el botón de copiar (arriba a la derecha del archivo), pegalo en Firebase y tocá **Publicar**.
5. Arriba a la izquierda, el engranaje → **Configuración del proyecto**. En "Tus apps" tocá el ícono `</>` (Web). Apodo: `avisarnos`. No tildes "Firebase Hosting". Tocá **Registrar app**. Firebase te muestra seis renglones: `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId` y `appId`. Dejá esa pestaña abierta.

Esos seis datos no son secretos: los ve cualquiera que abra la página. Lo que protege la base son las reglas del punto 4.

## Paso 3: configurar tu copia

Todo lo que cambia de un barrio a otro está en un solo archivo, `config.js`.

1. En tu repositorio de GitHub abrí `config.js` y tocá el lápiz de arriba a la derecha.
2. **Parte 1:** reemplazá los seis valores por los tuyos, sin borrar las comillas.
3. **Parte 2:** completá los datos de tu lugar: nombre del barrio o localidad, zona del pronóstico, provincia, el organismo de emergencias de tu zona si existe, y los teléfonos. Lo que no corresponda dejalo con comillas vacías, así: `""`.
4. Tocá **Commit changes**.

## Paso 4: publicar

1. En tu repositorio entrá a **Settings** y, en el menú de la izquierda (grupo "Code and automation"), a **Pages**. Ojo: no es "Branches".
2. En "Source" elegí **Deploy from a branch**. En "Branch" elegí `main` y al lado `/ (root)`. Tocá **Save**.
3. Esperá entre uno y tres minutos. Tu app va a estar en `https://TU-USUARIO.github.io/avisarnos/`.

## Paso 5: probar y arrancar

- Abrí la dirección. Si dice "Falta configurar la conexión", revisá la Parte 1 de `config.js`. Si al guardar aparece "El tablero no aceptó el cambio", las reglas no quedaron publicadas: repetí el punto 4 del Paso 2.
- Antes de invitar a nadie, probala con dos teléfonos: declará una alerta en uno y fijate que aparezca en el otro en uno o dos segundos.
- Cargá tu casa en **Mi casa**, armá los tramos en **Roles** y revisá los **Teléfonos útiles** en la pestaña Guía.
- El archivo `importar.html` no lo necesitás: sirve para traer datos de otra versión.
- Agregala a la pantalla de inicio del celular y pasales el link a tus vecinos.

## Antes de repartir el link

- Cualquiera que tenga el link puede ver el tablero y cargar datos. El perfil de cada casa (si hay chicos, personas mayores o alguien con un equipo médico) lo ve todo el que tenga el link. Compartilo solo en el grupo de tus vecinos.
- Avisarnos sirve para organizarse entre vecinos. **No reemplaza a los servicios de emergencia**: ante un riesgo real, primero se llama al 107, al 103 o al 100, o a los números de tu zona.
- Las recomendaciones por nivel de alerta y la lista "Estar preparados" salen de organismos argentinos. Si estás en otro país, revisalas.

## Recibir mejoras de la versión original

Si la versión original suma algo, en tu repositorio vas a ver un aviso que dice que tu copia está "behind" (atrasada). Tocá **Sync fork** y después **Update branch**.

- Si GitHub avisa de un conflicto en `config.js`, no elijas "Discard commits", porque eso borra tu configuración. Pedí ayuda.
- Si la mejora cambió `firestore.rules`, volvé a copiarlo y publicarlo en Firebase (Paso 2, punto 4).

## Licencia

Avisarnos es software libre de theorIA, con licencia [AGPL-3.0](LICENSE). Podés usarla, copiarla y cambiarla. Si publicás una versión modificada, tenés que compartir su código con la misma licencia. El link "Ver el código fuente", al pie de la pestaña Guía, apunta solo a tu copia.

La primera versión se armó para una cuadra de Salsipuedes, Córdoba.
