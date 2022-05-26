# Server Base - Proyecto ONG

## Informacion

API que brinda endpoints para el proyecto de la ONG Somos mas, ejercicio para la aceleracion de Alkemy, realizado por el equipo que se denomino **Los Inquietos** formado por:
- [Manuel Latorre](https://github.com/ManuelLatorre98)
- [Nicolas Borzone](https://github.com/nhoga)
- [Fernando Masino](https://github.com/fom78)
<hr />
Repositorios originales de trabajo, alli pueden ver todos los commits, PR y el avance.:

- [Frontend](https://github.com/alkemyTech/OT172-client-js)
- [Backend](https://github.com/alkemyTech/OT172-server)

A tener en cuenta, para el fin de poder desplegar la API en heroku, se decidio cambiar la base de datos mySQL por una Postgress, ya que en heroku se puede usar el addOns de manera free.

<hr />
El proyecto se documento con Swagger y se puede acceder a la misma:

[Documentacion](https://somos-mas-ong-172.herokuapp.com/docs/)

[Repositorio del frontend](https://github.com/fom78/alkemy-aceleracion-cliente)

## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

## Seeders


## Migraciones
- Crear el esqueleto para un modelo
```bash
npx sequelize-cli migration:generate --name create-model
```

Y luego crear dentro la estrucura correspondiente.

- Llenar con datos
```bash
npx sequelize-cli seed:generate --name create-data-model
```
y dentro del esqueleto que crea llenar con datos de pruebas.
