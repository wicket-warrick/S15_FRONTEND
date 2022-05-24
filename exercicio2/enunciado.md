# Datos asíncronos

Para este ejercicio vamos a usar una API "fake" para pruebas, aquí está la documentación:

https://jsonplaceholder.typicode.com/guide/

Esta API se comporta como una API real, pero los endpoints que permiten crear/modificar o borrar recursos realmente no lo hacen, pero responden como si lo hicieran.

El ejercicio consiste en crear una App de React que lea el listado completo de posts (GET a https://jsonplaceholder.typicode.com/posts) y los muestre en pantalla.

Antes del listado la App debe mostrar un formulario que permita crear un post nuevo, con estos campos:

- title (input text)
- body (textarea)
- userId (input number)

El formulario al enviarse debe hacer un POST a https://jsonplaceholder.typicode.com/posts y si todo es correcto añadir el nuevo post al principio de la lista para que se muestre **sin recargar la página**.

Bonus opcionales:

- mientras la petición inicial que carga los posts se esté realizando la App debe mostrar un indicador de que está cargando, si usas una imagen similar a estas mejor: https://samherbert.net/svg-loaders/
- lo mismo para el formulario, cuando el formulario envíe los datos debe mostrar un indicador de que está haciendo ese proceso.
