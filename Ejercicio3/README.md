# API de Contexto

Crea un contexto y un provider en una aplicación de React que gestione la preferencia visual de modo oscuro.

La estructura de componentes debe ser similar a esta:

- App
  - Header
    - Title
    - ThemeSwitcher
  - Content

El componente `ThemeSwitcher` debe contener un botón que permita cambiar el tema de la app a modo oscuro y modo claro. El componente `Content` debe cambiar su estilo visual acorde a la selección de tema.

Para ello tienes no puedes pasar estados ni funciones vía props, debes usar estas características de React:

- createContext
- Context Provider
- useContext

El resultado debe ser similar a este:

https://context-example-berto.vercel.app/
