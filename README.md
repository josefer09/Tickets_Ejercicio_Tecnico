<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" alt="NestJS" width="60" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="60" />
</p>

<h1 align="center">🛠️ Fullstack Ticket Manager</h1>
<p align="center">Aplicación completa de gestión de tickets usando NestJS, React, Docker, y buenas prácticas de desarrollo.</p>

---

### 🚀 Tech Stack

[![My Skills](https://skillicons.dev/icons?i=ts,nestjs,react,tailwind,docker,postgres,git,github,postman)](https://skillicons.dev)

---

### ✨ Features

- 🔥 **Clean Architecture** con separación de responsabilidades.
- ✅ **DTOs y Validaciones** para robustez y mantenimiento.
- 🧩 **Inversión de Dependencias (DI)** usando `@Injectable()` y providers.
- 💡 **Patrón Adapter** para Axios en React.
- 📁 **Estructura escalable y modular**.
- 🔄 **TanStack Query** para manejo eficiente del estado del lado cliente.
- 🎨 **Diseño atractivo y funcional** con TailwindCSS.
- 📦 **Contenerizado con Docker + Docker Compose**.
- 🧪 Endpoints semilla para regenerar datos rápidamente.

---

### 📁 Estructura del Proyecto
Fullstack_Developer_Ejercicio_Tecnico/

├── restful-api-ticket/ → Backend (NestJS)

├── ticket-app/ → Frontend (React + Vite)

## ⚙️ Requisitos Previos

- [Node.js](https://nodejs.org/) (v18+)
- [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [NestJS CLI](https://docs.nestjs.com/cli/overview) (opcional, pero recomendado)

## 🐳 Instalación con Docker (Recomendado)

### 1. Copia el archivo `.env.template` en cada proyecto (`ticket-app/` y `restful-api-ticket/`) y renómbralo como `.env`.

```bash
cp .env.template .env
```
### 2. Ejecuta el siguiente comando para levantar los servicios:
```bash
docker-compose up -d
```
Esto levantará:

PostgreSQL


### 3. Accede a tu app:

## 📦 Instalación Manual
### 🔁 Backend (NestJS)
previamente de haber copiado el env.template e inicializado el container del docker:
```bash
cd restful-api-ticket
npm install
npm run start:dev
```
URL base: http://localhost:4000/api/v1

Endpoint para regenerar datos: POST /ticket/seed

### 🎯 Frontend (React)
```bash
cd ticket-app
npm install
npm run dev
```
Abre http://localhost:5173

## 🧪 API Endpoints Relevantes

### GET /ticket: Obtener todos los tickets

### POST /ticket: Crear un nuevo ticket

### PATCH /ticket/:id: Actualizar un ticket

### DELETE /ticket/:id: Eliminar un ticket

### POST /ticket/seed: Regenerar datos de prueba

## 🧑‍💻 Autor
Proyecto realizado por Fernando Hernández

💼 Fullstack Developer

📍 Son, México


---

## 📦 Otras Aplicaciones que he construido

Estas aplicaciones las he desarrollado y diseñado para demostrar estructuras escalables y buenas prácticas profesionales usando **NestJS** y **React**.

### 🔷 [Nest-Up](https://github.com/josefer09/Nest-Up)
Un monorepo backend basado en **NestJS** que promueve una arquitectura limpia, modular y altamente mantenible.

- Modularización avanzada y enfoque en el dominio
- Aplicación de principios **SOLID** y **Clean Architecture**
- Separación clara entre capas de infraestructura, dominio y aplicación

### 🔷 [UpTask_FullStack](https://github.com/josefer09/UpTask_FullStack)
Una aplicación fullstack (NestJS + React) para gestión de tareas estilo Kanban.

- Sistema de autenticación con JWT
- Webhooks para enviar notificaciones (Discord, correo)
- Gestión de proyectos colaborativos y tareas
- Uso de patrones como **Repository**, **DTOs**, **Adapter pattern**, entre otros

> ✅ Ambas aplicaciones son una excelente base para construir productos reales, escalables y organizados.

