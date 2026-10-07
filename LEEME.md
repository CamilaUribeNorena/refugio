# Refugio: cómo publicarla e instalarla en el iPhone

## 1. Subirla a GitHub Pages (una sola vez, unos 10 minutos)

1. Entra a github.com y crea un repositorio nuevo, por ejemplo `refugio`. Puede ser público; tus registros nunca salen del teléfono.
2. En el repositorio, toca **Add file → Upload files** y arrastra los 8 archivos de esta carpeta:
   `index.html`, `manifest.webmanifest`, `sw.js`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `qr.png`.
   (Este LEEME no hace falta subirlo.) Luego **Commit changes**.
3. Ve a **Settings → Pages**. En *Branch* elige `main` y carpeta `/ (root)`, y guarda.
4. Espera uno o dos minutos. La dirección queda así: `https://TU-USUARIO.github.io/refugio/`

## 2. Instalarla en el iPhone

1. Abre esa dirección **en Safari** (no en Chrome).
2. Toca **Compartir → Agregar a pantalla de inicio → Agregar**.
3. Ábrela desde el ícono. Desde ahí funciona a pantalla completa y sin internet.

## 3. Tus datos

- Viven solo en el teléfono, dentro de la app instalada. Empieza vacía: lo que registraste en la versión de claude.ai no se pasa solo.
- En **Noche** tienes:
  - **Descargar mis registros (CSV)**: para analizarlos o llevarlos a terapia.
  - **Guardar copia de seguridad**: un archivo `.json`. Guárdalo en Archivos o iCloud de vez en cuando.
  - **Restaurar copia**: para cambiar de teléfono o si borras la app.
- Si borras el ícono de la pantalla de inicio, se borran los datos. Haz copia antes.

## 4. Cuando cambiemos algo de la app

1. Sube el `index.html` nuevo al repositorio (reemplaza el anterior).
2. En `sw.js`, sube el número de `refugio-vN` (va en `refugio-v4`) y súbelo también.
3. Abre la app con internet una vez y ciérrala; la siguiente vez abre la versión nueva. Tus datos no se tocan.
