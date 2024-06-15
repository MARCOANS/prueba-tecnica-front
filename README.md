
# My App

## Descripción

My App es una aplicación React creada utilizando Create React App. Utiliza Redux para la gestión del estado, Redux-Saga para manejar los efectos secundarios, y Ant Design (antd) para los componentes de la interfaz de usuario.

## Requisitos previos

- Node.js (versión 14.x o superior)
- npm (versión 6.x o superior) o yarn (versión 1.x o superior)

## Configuración del proyecto

1. Clona este repositorio en tu máquina local.

   ```bash
   git clone https://github.com/MARCOANS/prueba-tecnica-front.git
   ```

2. Navega al directorio del proyecto.

   ```bash
   cd tu-repositorio
   ```

3. Copia el archivo de ejemplo de configuración de entorno y renómbralo a `.env`.

   ```bash
   cp .env.example .env
   ```

## Instalación de dependencias

1. Instala las dependencias del proyecto utilizando npm o yarn.

   ```bash
   npm install
   ```

   o

   ```bash
   yarn install
   ```

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `npm start` o `yarn start`

Inicia la aplicación en modo de desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

La página se recargará cuando realices cambios.
También puedes ver errores de lint en la consola.

### `npm run build` o `yarn build`

Compila la aplicación para producción en la carpeta `build`.
Agrupa correctamente React en modo de producción y optimiza la compilación para el mejor rendimiento.

La compilación está minificada y los nombres de los archivos incluyen los hashes.

### `npm test` o `yarn test`

Inicia el corredor de pruebas en el modo de observación interactivo.
Consulta la sección sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

### `npm run eject`

**Nota: esta es una operación de una sola vez. ¡Una vez que `eject`as, no puedes volver atrás!**

Si no estás satisfecho con la herramienta de compilación y las opciones de configuración, puedes `eject` en cualquier momento. Este comando eliminará la dependencia de compilación única de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos, excepto `eject`, seguirán funcionando, pero apuntarán a los scripts copiados para que puedas ajustarlos. En este punto, estás por tu cuenta.

## Dependencias principales

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Ant Design](https://ant.design/)
- [Axios](https://axios-http.com/)
- [React SweetAlert2](https://github.com/sweetalert2/react-sweetalert2)

## Dependencias de desarrollo

- [TypeScript](https://www.typescriptlang.org/)
- [Testing Library](https://testing-library.com/)
- [Types for React](https://www.npmjs.com/package/@types/react)
- [Types for Redux](https://www.npmjs.com/package/@types/react-redux)
- [Types for Axios](https://www.npmjs.com/package/@types/axios)

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
