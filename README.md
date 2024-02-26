# Sistema de Gestión de Productos

Este proyecto es un sistema simple de gestión de productos desarrollado utilizando tecnologías como React para el frontend y Spring Boot para el backend. La aplicación permite agregar, actualizar, eliminar y listar productos.
# Sistema de Gestión de Productos

## Introducción

Este proyecto es un sistema simple de gestión de productos desarrollado utilizando tecnologías como React para el frontend y Spring Boot para el backend. La aplicación permite agregar, actualizar, eliminar y listar productos.

## Contenido

- [Introducción](#introducción)
- [Tecnologías](#tecnologías)
- [Configuración del Proyecto](#configuración-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Cómo Ejecutar](#cómo-ejecutar)
- [API del Backend](#api-del-backend)
- [Frontend](#frontend)
- [Base de Datos](#base-de-datos)
- [Licencia](#licencia)

## Introducción

Este sistema de gestión de productos proporciona una interfaz fácil de usar para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en productos. Los usuarios pueden agregar nuevos productos, actualizar información existente, eliminar productos y ver una lista de productos disponibles.

## Tecnologías

- React
- Spring Boot
- MySQL
- Bootstrap
- Axios

## Configuración del Proyecto

### Requisitos

Asegúrate de tener Node.js, npm, Java y MySQL instalados en tu máquina.
Crear la BD con el bloc de notas en el cual se encuentran los queries.

### Configuración

1. Clona el repositorio: `https://github.com/CAntonioGQ/CRUD-Java-Springboot-React`
2. Navega a la carpeta del proyecto: `cd your-project`
3. Configura la base de datos en `application.properties`.
4. Instala las dependencias del frontend: `cd frontend && npm install`
5. Vuelve a la raíz del proyecto: `cd ..`

## Estructura del Proyecto

- **frontend**: Contiene el código del frontend React.
- **src**: Contiene el código fuente del backend Spring Boot.
- **pom.xml**: Archivo de configuración de Maven para el backend.
- **README.md**: Documentación del proyecto.

## Cómo Ejecutar

1. Inicia el backend: `./mvnw spring-boot:run` en la carpeta `src`.
2. Inicia el frontend: `cd frontend && npm start`.

## API del Backend

El backend expone una API REST con las siguientes operaciones:

- `GET /api/products`: Obtiene la lista de productos.
- `POST /api/products`: Agrega un nuevo producto.
- `PUT /api/products/{id}`: Actualiza un producto existente.
- `DELETE /api/products/{id}`: Elimina un producto por su ID.

## Frontend

La interfaz de usuario se construye con React y Bootstrap para una experiencia de usuario agradable y receptiva.

## Base de Datos

Configura tu base de datos MySQL en el archivo `application.properties` del backend.
Dentro del Formato de Texto BD encontrarás los queries para la BD

