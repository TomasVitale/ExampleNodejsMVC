# NodeJsApisForEcommerce
Prueba BackEnd Jr
Entorno Local :

1 - Antes de iniciar la aplicacion utilizar el comando ------   npm i  --------  para instalar los paquetes necesarios para la ejecucion.

2 - Una vez todos los paquetes esten instalados, dirigirse al archivo .env ( variables de entorno) en la carpeta raiz y cambiar la variable a ( force= true), esto sincroniza la base de datos y crea las tablas de manera automatica. 

3 - Utilizo la base PostgreSQL, para configurar lo necesario para la generacion de tablas configurar la base con el ORM ( Sequelize ), en Postgres utilizo una base de datos llamada Enviame, mi usuario es postgres y mi contraseña es Saraza01!. 
    en la carpeta raiz, dirigirse a la carpeta database, abrir el archivo db.js  y configurar de la siguiente manera.

      const db = new Sequelize("nombre de la base de datos creada por ustedes ", "nombre de usuario de postgres creado por ustedes", "contraseña de la base de datos creado por ustedes", 
      host: "localhost", ( dejarlo de esa manera)
      dialect: "postgres", ( dejarlo de esa manera)
      logging: false, ( dejarlo de esa manera).

      PD: En caso de no tener contraseña dejar el campo vacio.


4 - Levantar la aplicacion con el comando ----- npm run start ----- , apagarla y volver a cambiar la variable del paso 2 en false ( para que no se actualice eternamente y permita guardar data):

5 - Levantar la aplicacion con el comando ----- npm run start -----. Ya estaria funcionando para probar el CRUD.

6 - La aplicacion esta asegurada mediante JWT ( JsonWebToken), utilice KeyCloak ya que tengo experiencia trabajando con el en mi trabajo actual en el framework de NestJS.
   
   Requisitos: Tener JAVA actualizado.

    Para poder generar el token necesario para hacer las peticiones a las API, primero hay que descargarse el keycloak ( https://www.keycloak.org/getting-started/getting-started-zip ),
    una vez descargado, descomprimir el archivo ( por ejemplo en la carpeta Downloads), abrir la carpeta Keycloak18.0.2 y ejecutar por terminal el comando  (bin/kc.sh start-dev en Linux/MAC   o bin/kc.bat start-dev en Windows)
    , el keycloak se empezara a ejecutar en la terminal. Luego dirigirse en el Browser a la direccion localhost:8080 ---> Administration Console ( generar usuario si es necesario / mi usuario es: admin y contraseña: enviame ), clickear Realms, crear un nuevo Realm e importar el archivo RealmEnviame que dejo adjunto en la carpeta raiz, entrar en el Realm
    y dirigirse a la pestaña Clients. Luego en la pestaña clientes, abrir el cliente enviame, abrir la pestaña Credentials, seleccionar Regenerate Secret y copiar la celda Secret.
    Luego en la carpeta raiz del proyecto (proyectoEnviame), dirigirse a la carpeta " config ", abrir el archivo KeyCloak-config.js y completar los datos del objeto KeycloakConfig 
    
    clientId: 'enviame',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'enviame',
    credentials: {
        secret: 'Colocar el Secret Generado'.
          
          
  Ya esta listo para generar su token mediante API Propia ( agrego su api en las Colecciones de PostMan), deje predeterminado que el token tenga un vencimiento infinito con el objetivo de no estar generando tokens cada 30seg para las pruebas.

********* IMPORTANTE *********** 

Para generar el token, en las colecciones de postman solo hay que modificar el client_Secret por el que les creo el keycloak en su entorno. el client_id es el nombre del cliente ( en este caso enviame)

6 - La aplicacion ya esta lista para las pruebas en postman. ( Dejo adjunto las colecciones en la carpeta Raiz).

*************************************                                  ******************************************                      ********************************

Docker Enviroment:

Requerimientos:
  -- Tener instalado y corriendo a docker en el entorno local.
  -- Abrir terminal y escribir el siguiendo comando para crear una red:  docker network create --driver=bridge --subnet=172.28.0.0/16 --ip-range=172.28.5.0/24 --gateway=172.28.5.254 enviame-net

Abrir la terminal

1 - Para ejecutar el postgres en docker. Dirigirse a la carpeta raiz (proyectoEnviame) desde la terminal y ejecutar el comando docker-compose up. ( antes de levantar el proyecto en docker, dirigirse a la carpeta database en la raiz del proyecto, abrir el archivo db.js y en host colocar la ip que corre el postgres 172.28.5.1 )
    
    - Conectarse al pgadmin en el navegador <http://localhost:80> y crear servidor y base de datos llamada Enviame.
                  Host: 172.28.5.1
                  Port: 5432
 Usuario mantenimiento: postgres
               Usuario: postgres
              Password: Saraza01! 
  -- El pgAdmin va a estar corriendo en el puerto 80 ( localhost:80). Ingresar con el usuario ( tomasvitale@enviame.com), contraseña ( enviame ). Crear la base de datos (Enviame), las tablas se crean en el Schema public al ejecutar la app.  

2 - Crear el contenedor de Keycloak con la imagen oficial. A diferencia del entorno local, aqui se esta definiendo un usuario ( admin) y una contrasena(enviame) por comando. Ingresar con esos datos al Realm
  
  -- Ejecutar el siguiente comando en la terminal ( cualquier path ):   docker run -d --name=keycloak-18 --net=enviame-net  -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=enviame quay.io/keycloak/keycloak:18.0.0 start-dev

2 - Una vez corriendo la imagen en el contenedor, ingresar al navegador y dirigirse al localhost:8080 ( asegurarse de no tener corriendo el keycloak de forma local ya que se pisarian los puertos) y seguir los mismos pasos que de forma local.

  -- Crear realm, importar el Realm de la carpeta raiz y copiar la celda secret del mismo ya que es distinto dependiendo la ejecucion del keycloak.

  -- En la carpeta raiz, ingresar a la carpeta config, keycloak-config.js y cargar los datos del Realm, cliente y la palabra Secret generada por la imagen de Keycloak.



4 - Para levantar el proyecto de Node, primero hay que realizar los pasos anteriores ya que para configurar el Keycloak,tiene que estar corriendo y, el proyecto node tiene que estar inactivo. Dirigirse a la carpeta raiz ( proyectoEnviame ) y Ejecutar los siguientes comandos:

  -- " docker build -t proyecto-enviame . "  . Este comando crea la imagen del proyecto.
  -- " docker run --net=enviame-net -p 3000:3000 proyecto-enviame " . Este comando crea el contenedor y lo empieza a correr en el puerto 3000.



******************************************                                           ********************************
