Cohorte 2 - Grupo 13
Olimpya Hotel React-Django-Graphql App
Tecnologias Usadas:
Frontend
React
React Router
Bootstrap
React Apollo Client
Fontawesome
Formik
Backend
Django
GraphQl
JWT Auth
Postgres
Instalar aplicación
Front End:
Para arrancarlo debes moverte a la carpeta "main" y ejecutar el siguiente comando:

$ npm start 
Esta aplicación fue creada con:
$ create-react-app

Back End:
Configuración del entorno virtual
Se configura el entorno virtual para aislar la aplicación, el uso de la herramienta virtualenv nos ayuda a manejar las versiones de las dependencias de forma eficiente:

$ python3.8 -m venv .env
$ source .env/bin/activate
$ pip install -r requirements.txt
Configuración de la base de datos:
Debemos configurar nuestro motor de base de datos para realizar las conexiones.

Después de la instalación, debemos asignar permisos de superusuario para configurar nuestras credenciales para la base de datos:

$ sudo su - postgres
Ahora debería estar en una sesión de shell para el usuario de postgres. Se inicia sesión en Postgres escribiendo:

$ psql
Primero, crearemos una base de datos para nuestra aplicación en Django.

$ CREATE DATABASE Medical_Store;
A continuación, crearemos un usuario de base de datos que usaremos para conectarnos e interactuar con la base de datos. Se debe establecer una contraseña larga y segura:

$ CREATE USER medicaluser WITH PASSWORD 'password';
Luego, modificaremos algunos de los parámetros de conexión para el usuario que acabamos de crear. Esto acelerará las operaciones de la base de datos para que no sea necesario consultar y configurar los valores correctos cada vez que se establece una conexión.

Estamos configurando la codificación predeterminada en UTF-8, que espera Django. También estamos configurando el esquema de aislamiento de transacciones predeterminado en "lectura confirmada", que bloquea las lecturas de las transacciones no confirmadas. Por último, estamos configurando la zona horaria. De forma predeterminada, nuestro proyectos de Django estarán configurados para usar UTC:

$ ALTER ROLE medicaluser SET client_encoding TO 'utf8';
$ ALTER ROLE medicaluser SET default_transaction_isolation TO 'read committed';
$ ALTER ROLE medicaluser SET timezone TO 'UTC';'UTC';
Ahora, para finalizar las preparaciones de nuestra base de datos tenemos que otorgar a nuestra derechos de acceso de usuario a la base de datos que creamos:

$ GRANT ALL PRIVILEGES ON DATABASE Medical_Store TO medicaluser;
Es importante configurar las variables de entorno para realizar una conexión segura con la base de datos.

Para finalizar e iniciar la instancia del servidor de Django debemos migrar las configuraciones de los modelos para la base de datos y correr nuestra aplicación:

$ python manage.py migrate
$ DEVELOPMENT=1 python manage.py runserver
Organización de archivos en frontend:
En "src" encontraras todas las funcionalidades, desde los componentes, hooks, contexts y configuraciones.

Organización de archivos en backend:
En "core" encontraremos todas las configuraciones importantes en nuestro archivo "settings" para hacer correr la aplicación y configurar las variables correctas para las conexiones a la base de datos.

Además dividimos la lógica más importante en distintas aplicaciones y se crean "media querys" y "mutaciones" para la interacción con el api desde el frontend.

Sobre el proyecto
Problema
Con la poca disposición para vacacionar debido a la pandemia, no es facil conseguir un lugar tranquilo y con todos los requerimientos necesarios para poder alojarse.

Solución
El Hotel Olimpya cuenta con todos los requerimientos y comodidades para cumplir con todas las espectativas de sus clientes.

Authors
Joan - backend
Leandro - frontend