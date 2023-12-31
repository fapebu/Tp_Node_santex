
# TP node-santex ⚡️



## Descripción 

- Al momento de comenzar el proyecto se creó la estructura de las carpetas y archivos base. Creamos un archivo “index.js” como nuestro archivo principal desde el cual se va a ejecutar nuestro programa. En este archivo importamos Express, se definen las rutas para diferentes recursos (bibliotecas, libros y usuarios) y se realiza una inicialización de la base de datos.Por último se pone a la escucha las conexiones entrantes en el puerto 3000.

- Dentro de la carpeta routes, vamos a encontrar las rutas que incluyen métodos como (POST, GET, PUT y DELETE). Están asociadas a los correspondientes controladores que se encargan de la lógica de cada ruta. Además, se utiliza un middleware de autenticación para verificar la validez de un token en las rutas, tanto para un “user” como para un “admin”. Basado en lo que se pide en la consigna se va a comprobar que a la hora de hacer una petición, se tenga un token válido ya sea para crear, modificar o eliminar tanto un libro como una librería. Por otro lado tenemos la entidad usuario para la cual para crear, modificar, eliminar un elemento de la base de datos, el token tiene que ser generado por un usuario con el rol de “admin”. Para validar el token lo que se utiliza es JSON Web Tokens (JWT) y el módulo Passport. Esto se encuentra definido en la carpeta middleware, dentro del archivo autentication. En él, se configura una estrategia de autenticación basada en JWT que es utilizada para verificar y desencriptar el token en las solicitudes entrantes. Por último nos encontramos con la función validtoken que utiliza el middleware de autenticación de Passport para verificar la validez del token y con la función admintoken que actúa como un middleware para verificar si el usuario tiene un rol de "Admin" en el token.

- Con respecto a los controllers, vamos a encontrar para cada entidad un controller que se encarga de recibir una solicitud HTTP, procesarla mediante el llamado al service y luego devolver una respuesta a la petición HTTP con los datos o un mensajes de error en caso de que la petición fuera fallida.

- De aquí pasamos al service, el cual se encarga de la lógica de negocio relacionada con el manejo de datos. Dentro de ella podemos destacar la función createBook que se encarga de verificar el estado de la biblioteca asociada a un libro mediante el uso de libraryprovider. Si la biblioteca tiene un estado válido,llama a bookProvider para crear el libro. Si no es así, devuelve null.

- En la sección de provider se definen funciones que interactúan con un modelo, para realizar operaciones CRUD en la base de datos.Se utiliza Sequelize para definir un modelo de datos y además proporciona funciones para realizar operaciones en la base de datos de forma mucho más eficiente. De este código hay que remarcar al método destroy que elimina el registro que cumpla con la condición especificada en el objeto where. El parámetro force se establece en false para realizar soft delete, que en lugar de eliminar el dato de la base de datos,se modifica la columna y el dato no se lista al hacer un get de datos tal y como pide la consigna. Por último encontramos los modelos los cuales como su nombre lo indica define un modelo de datos,utilizando Sequelize.

- El modelo tiene campos que representan las propiedades de las distintas entidades como fueron solicitadas(excepto deleteAt que es necesaria para el soft delete).Estas propiedades están configuradas con validaciones para asegurar que los datos cumplan con ciertos criterios ya sea por expresiones regulares o por mismas propiedades de sequelize. Se proporcionan opciones adicionales de paranoid y timeStamp en true para realizar la ya comentada eliminación suave.





