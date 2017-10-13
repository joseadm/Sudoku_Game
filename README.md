# Sudoku
Este proyecto se realizo con el objetivo de aprender la arquitectura MEAN
en la cual se utilizo en este caso [MongoDB](http://www.mongodb.org/) como base de datos,
ademas [Node.js](http://www.nodejs.org/) con su complemento y framework mas usado para 
servidores [Express](http://expressjs.com/), estas fueron utilizadas para el desarrollo del
API Rest y como framework de desarrollo para el cliente se utilizo [AngularJS](http://angularjs.org/)
esto para realizar una SPA (Single Page Application) que permitira el manejo del juego Sudoku

## Herramientas
Las herramientas que se utilizaron para el desarrollo de esta aplicacion son:
* MongoDB - [MongoDB Base de Datos](http://mongodb.org/) 
* Express - [Express Framework Node](http://expressjs.com/)
* AngularJS - [AngularJS Cliente](http://angularjs.org/)
* Node.js - [Node.js Servidor](http://nodejs.org/)
* Mongoose.js - [Mongoose.js ORM para MongoDB](http://mongoosejs.com/)
* P5.js - [P5.js Diseño del Tablero](https://p5js.org/)

## Requisitos
Asegurarse de instalar las siguientes herramientas:
* Git - [Descarga e Instala Git](https://git-scm.com/downloads) Se utiliza para la gestion del repositorio
* Node.js - [Descarga e Instala Node.js](https://nodejs.org/en/download/) Instalar el paquete de npm
* MongoDB - [Descarga e Instala MongoDB](http://www.mongodb.org/downloads) Mantener en el puerto (27017)

### Clonar el repositorio de Github
La forma recomendada es con la directiva clonar de git:

```bash
$ git clone https://github.com/alonsocoding/Sudoku_Game
```

### Compilando el proyecto

0) levantar la base de datos 

```bash
$ mongod -dbpath "PATH"
```

1) Ejecutar el siguiente comando dentro de la carpeta api para correr el API Rest:

```bash
$ npm start
```

2) Ejecutar el siguiente comando dentro de la carpeta cliente:

```bash
$ ng serve
```

3) Ingresar a http://localhost:4200/ 


