
# **Proyecto Web Busi App hecho con Node.js, Angular 17 y TailwindCSS**

## **Requisitos**
1. **Node.js**: Instálalo desde [nodejs.org](https://nodejs.org).  
2. **Angular CLI 17**:  
   ```bash
   npm install -g @angular/cli@17
   ```

---

## **Instalación**
1. Clona el repositorio:  
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```
2. Instala las dependencias:  
   ```bash
   npm install
   ```

---

## **Configuración de TailwindCSS**
1. Asegúrate de que `tailwind.config.js` esté configurado así:
   ```javascript
   module.exports = {
     content: ["./src/**/*.{html,ts}"],
     theme: { extend: {} },
     plugins: [],
   }
   ```

---

## **Ejecución**
1. Ejecuta el servidor de desarrollo:  
   ```bash
   npm start
   ```
   O con Angular CLI:  
   ```bash
   ng serve -o
   ```
2. Abre tu navegador en: `http://localhost:4200`.

---

¡Listo! 🎉 Tu proyecto estará funcionando.
