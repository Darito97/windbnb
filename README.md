# Windbnb
 Esta es una pagina creada con react.js y un archivo JSON que contiene la informacion de los lugares que se encuentran en ella.
 Fue creada con create-react-app.
 Si quieres verla puedes visitar el siguiente link [Windbnb](https://windbnbcloneairbnb.netlify.app)
### En ella se encuentran los siguientes componentes:
- Header
- StayItem

Los primeros dos son vistas del encabezado y el pie de pagina y el ultimo es un componente que se crea las veces necesarias con el metodo de arrays map para mostrar los objetos que coinciden con la busqueda.

Los unicos comandos que pueden ser usados son `npm start`, que sirve para inicializar la aplicacion en modo desarrollo y `npm run build` que te entrega una version compilada y optimizada en la carpeta dist la cual esta lista para llevar a produccion.
### Explicacion de los archivos mas importantes:
#### src/index.js
 Este archivo contiene el metodo render que utiliza react para comenzar la inicializacion de la pagina web renderizando en el componente con id='root' y llama al componente App para que se ejecute en ese espacio.
#### src/App.js
 Este es el componente principal de la pagina en el cual obtiene la data del archivo JSON y se utiliza en toda la aplicacion mandandola por props a los componentes hijos.
 Aqui mismo se hace llamado de los componentes Header, Footer y StayItem.

 Se hace uso del hook `useState` el cual nos sirve para controlar la data en toda la aplicacion.

 Su arrow function llamada cambiarData te permite cambiar la data de toda la aplicacion a traves de dos parametros llamados nombreDeCiudad( cual es una cadena) y numeroDeHuespedes(el cual es un entero). 
 Si no se le ingresa ningun parametro restablece la data a sus inicios, si solo se le pasa uno realiza la comparacion en la cual se revisa que los resultados incluyan las letras del parametro nombreDeCiudad o que el numeroDeHuespedes sea menor que los que puede contener el lugar.
 
 Este archivo contiene 3 estados los cuales son:
 - data ( gestiona la lista de los lugares disponibles con las opciones seleccionadas ).
 - city ( gestiona la ciudad que se esta buscando).
 - gests ( gestiona la cantidad de invitados).
#### src/data/stays.json
 Contiene el JSON de donde se obtienen los siguientes datos de cada lugar:
 - city (string)
 - country (string)
 - superHost (boolean)
 - title (string)
 - rating (int)
 - maxGuests (int)
 - type (string)
 - beds (null o int)
 - photo (string con link de la imagen)
#### src/resources/Icons
 Contiene todos los iconos que se necesitan en el proyecto
#### src/resources/components/Header/Header.js
 Contiene el encabezado de la pagina que muestra:
 - Logo de la pagina
 - Formulario de busqueda

 Este ultimo esta solo para lectura de los datos buscados ya que al hacer focus en cualquiera de los campos se abre un formulario diferente que contiene algunos cambios asi como mas informacion acerca de los lugares que se pueden buscar, se muestran las opciones disponibles en la parte de abajo y un boton de buscar.

 Esta al igual que App.js usa el `use State` creando los siguientes componentes:
 - mostrarFiltrosDeBusqueda:
    Este controla el muestreo de los filtros de la busqueda, añade clases y se activa cuando se hace focus en los input.
 - busqueda:
    Contiene el arreglo de ciudades que coinciden con lo que ingresas en el input location
 - inputLocalizacion:
    Este componente sirve para controlar lo que se ingresa en el input location y asi volverlo un *componente controlado*.
 - inputGests:
    Al igual que el anterior este sirve para crear un `componente controlado` solo que con el input gests.

##### Funciones de Header.js
 - DevolverArregloDeCiudades:
    Esta arrow function te permite obtener un arreglo de ciudades el cual recibe un string como parametro llamado busqueda que te permite filtrar las ciudades y solo obtener las que se parecen a lo que has ingresado.
    En caso de no ingresar nada te regresa la lista completa de ciudades
 - CambioDeBusqueda:
    Esta arrow function te permite a traves de un string como parametro cambiar el estado del componente busqueda ejecutando la funcion devolverArregloDeCiudades y el inputLocalizacion. Se ejecuta cada que haces cambios en el input location. 
 - agregarLocalizacion:
    Esta arrow function te permite a traves de un string como parametro asignar el valor seleccionado a el inputLocalizacion y limpiando las recomendaciones de abajo al cambiar el estado de busqueda tambien se ejecuta la funcion CambioDeBusqueda
 - realizarBusqueda:
    Esta arrow function obtiene el valor del input location a traves de su estado asi como el del input gests, compara si los campos estan limpios y si lo estan devuelve una alerta. Si los campos contienen informacion se utiliza el metodo `cambiarData` obtenido por medio de props y se muestran los resultados obtenidos en la busqueda

Cabe destacar que esta clase recibe las siguientes props:
- data (array).
- cambiarData (function).
- city (string).
- gests (int o cadena vacia).

#### src/components/StayItem/StayItem.js
 Esta clase contiene el objeto que te permite generar cada card de cada lugar mostrado en la lista de data.
 Obtiene los siguientes valores por props:
 - stay
    Este objeto que recibe contiene los siguientes datos que se obtienen por destructuring:
    - title
    - superHost
    - rating
    - type
    - beds
    - photo
    Los cuales usa para renderizar cada componente.

##### Estos son todos los archivos mas importantes del proyecto, obviando por supuesto los que venian por default. 
