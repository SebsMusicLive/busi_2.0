Proyecto Web con Node.js, Angular 17 y TailwindCSS
Requisitos
Node.js: Instálalo desde nodejs.org.
Angular CLI 17:
bash
Copiar código
npm install -g @angular/cli@17
Instalación
Clona el repositorio:
bash
Copiar código
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
Instala las dependencias:
bash
Copiar código
npm install
Configuración de TailwindCSS
Asegúrate de que tailwind.config.js esté configurado así:
javascript
Copiar código
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: { extend: {} },
  plugins: [],
}
Ejecución
Ejecuta el servidor de desarrollo:
bash
Copiar código
npm start
O con Angular CLI:
bash
Copiar código
ng serve -o
Abre tu navegador
