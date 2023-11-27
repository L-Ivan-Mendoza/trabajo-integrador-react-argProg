# Trabajo Integrador Argentna Programa UTN

## Descripción
App web de gestion de tareas (POST, GET, UPDATE, DELETE) desarrollada para el trabajo integrador
del curso "Desarrollador web con React.Js" de la UTN para Argentina Programa 4.0 .

## Instalación
1. Clona el repositorio del Front: `git clone https://github.com/L-Ivan-Mendoza/trabajo-integrador-react-argProg.git`
2. Clona el repositorio del Back: `git clone https://github.com/L-Ivan-Mendoza/back-trabajo-integrador-react.git`
3. Ingresa al directorio del proyecto Front: `cd Client`
4. Instala las dependencias: `npm install`
6. Ingresa al directorio del proyecto back 
7. Instala las dependencias: `npm i json-server`
8. Instala las dependencias: `npm i -g json-server`

## Uso
Para ejecutar el proyecto, utiliza el siguiente comando en el front: `npm start`
Para ejecutar el proyecto, utiliza el siguiente comando en el back: `npm start`

## Licencia
ESTE REPOSITORIO FUE CREADO CON **FINES EDUCATIVOS** EXCUSIVAMENTE PARA:
Curso de **"Desarrollador web con React.Js" de la UTN para Argentina Programa 4.0 .**

## Estado del Proyecto
**Versión:** 1.0.0
**Estado:** En Desarrollo

## Contacto
Para más información, contacta a Iván Mendoza en sirius.ivo@gmail.com .

<br>
<br>
<br>
<br>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list