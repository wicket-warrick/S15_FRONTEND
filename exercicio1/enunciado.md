# Custom hooks

Conocemos ya algunos hooks que React nos proporciona como useState, useEffect, useRef, etc... pero podemos también crear hooks personalizados. En este ejercicio tienes que crear un hook personalizado muy simple.

Este hook debe gestionar un contador y debe exportar:

- El valor actual del contador
- Una función para incrementar su valor en 1
- Una función para decrementar su valor en 1

Con estos extras:

- El valor del contador nunca puede ser inferior a 0
- El hook debe permitir establecer el valor inicial del contador, si no se especifica el valor inicial se asume como 0.
- Cada vez que cambie el valor del contador debe cambiar el título de la ventana del navegador por el texto "El contador tiene un valor de X" (siendo X el valor actual del contador)

Ese hook debes importarlo en un componente que muestre dos `<button>` y un `<h1>`. El `<h1>` debe mostrar el valor actual del contador y cada uno de los botones debe incrementar y decrementar el valor respectivamente.
