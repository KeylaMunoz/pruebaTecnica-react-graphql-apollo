# Rick and Morty React Application

Este proyecto es una aplicación web desarrollada en React, utilizando Apollo Client para consumir la API de **Rick and Morty** a través de GraphQL, y Material UI para la interfaz de usuario. Permite listar personajes, filtrarlos, ver detalles de cada uno, agregar personajes a favoritos, y simula un sistema de autenticación básica.

## Tecnologías y Lenguajes Utilizados

- **React**: Biblioteca para construir la interfaz de usuario.
- **Apollo Client**: Cliente para interactuar con la API de GraphQL.
- **Material UI**: Biblioteca de componentes para diseñar la interfaz de usuario.
- **GraphQL**: Lenguaje de consulta para obtener los datos desde la API de Rick and Morty.
- **JSX**: Lenguaje principal para el desarrollo del frontend.
- **LocalStorage**: Almacenamiento de favoritos y autenticación simulada.

## Instalación

### 1. Clonar repositorio:

Clona este repositorio utilizando Git:

```bash
git clone https://github.com/KeylaMunoz/pruebaTecnica-react-graphql-apollo

### 2. Instalar dependencias:

```bash
npm install

#### Dependencias utilizadas
    "graphql"
    "react"
    "react-dom"
    "react-router-dom"
    "react-scripts"
    "@apollo/client"
    "@emotion/react"
    "@emotion/styled"
    "@mui/icons-material"
    "@mui/material"


### 3. Ejecutar el proyecto:

```bash 
nmp start

## Rutas

"/": Página de registro. 
          
"/login": Página de inicio de sesión.

"/characters": Lista de personajes de Rick and Morty

"/favorite": Página de personajes favoritos

"/character/:id": Página de detalles de un personaje específico.
