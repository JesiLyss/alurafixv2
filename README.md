# Alura Flix

Alura Flix es una aplicación de React que permite gestionar una colección de videos categorizados. Los videos pueden ser añadidos, editados y eliminados a través de una interfaz amigable.

## Requisitos

- Node.js
- npm o yarn

## Instalación

Clona el repositorio y navega al directorio del proyecto:

```
git clone <URL_DEL_REPOSITORIO>
cd aluraflix
```

Instala las dependencias necesarias:

```
npm install
```
o

```
yarn install
```

Para simular una API, utilizaremos json-server. Asegurate de tenerlo instalado globalmente:

```
npm install -g json-server
```

Crea el archivo "db.json" en la carpeta raíz del pryecto con el siguiente contenido:

```
{
  "videos": [
    {
      "id": 1,
      "title": "Video 1",
      "description": "Description 1",
      "category": "Frontend",
      "url": "https://example.com/video1",
      "image": "https://example.com/image1.jpg"
    },
    {
      "id": 2,
      "title": "Video 2",
      "description": "Description 2",
      "category": "Backend",
      "url": "https://example.com/video2",
      "image": "https://example.com/image2.jpg"
    }
  ],
  "categories": ["Frontend", "Backend", "Innovación y Gestión"]
}
```

## Ejecutar el proyecto

Primero, inicia el servidor JSON:

```
json-server --watch db.json --port 3001
```

Luego, inicia la aplicación React:

```
npm start
```

La aplicación debería estar corriendo en 'http://localhost:3000' y el servidor JSON en 'http://localhost:3001'.

## Estructura del proyecto

```
alura-flix/
├── public/
├── src/
│   ├── components/
│   │   ├── EditModal.js
│   │   ├── Image.js
│   │   ├── Navbar.js
│   │   └── VideoCard.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── AddVideo.js
│   │   └── EditVideo.js
│   ├── App.js
│   ├── index.js
│   └── styles.js
├── db.json
├── package.json
├── README.md
└── vercel.json
```

## Uso de la API

- Obtener todos los videos:
```
GET /videos
```

- Agregar un nuevo video:
```
POST /videos
```

- Actualizar un video:
```
PUT /videos/:id
```

- Eliminar un video:
```
DELETE /videos/:id
```

## Contacto

* Correo electrónico: gab.bmar.05@gmail.com
* WhatsApp: +5492262339680