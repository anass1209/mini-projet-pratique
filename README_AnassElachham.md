# Candidate Management System

A full-stack web application for managing job candidates, built with Django REST Framework and TypeScript. This project demonstrates end-to-end development capabilities including API design, database modeling, and modern frontend implementation.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start with Docker](#quick-start-with-docker)
- [Manual Setup](#manual-setup)
- [API Documentation](#api-documentation)
- [Usage Examples](#usage-examples)
- [Environment Variables](#environment-variables)

## Features

- **Candidate Management**: Create, list, and search candidates
- **File Upload**: CV upload support (PDF, DOC, DOCX)
- **Real-time Filtering**: Dynamic search by skills using TypeScript
- **REST API**: Clean API endpoints with proper error handling
- **Responsive UI**: Modern interface with Vite + TypeScript
- **Dockerized**: Complete containerization for easy deployment
- **Type Safety**: Strict TypeScript typing throughout the frontend

## Tech Stack

### Backend
- **Django 4.2** - Web framework
- **Django REST Framework** - API development
- **PostgreSQL 13** - Database
- **Python-dotenv** - Environment management
- **django-cors-headers** - CORS handling

### Frontend
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client for API calls
- **Vanilla TypeScript**

### DevOps
- **Docker & Docker Compose** - Containerization
- **PostgreSQL 13** - Production-ready database

## Project Structure

```
mini-projet-pratique/
├── backend/
│   ├── api/
│   │   ├── models.py          # Candidate data model
│   │   ├── serializers.py     # API serialization
│   │   ├── views.py           # API endpoints
│   │   └── urls.py            # URL routing
│   ├── project_config/
│   │   ├── settings.py        # Django configuration
│   │   └── urls.py            # Main URL config
│   ├── requirements.txt       # Python dependencies
│   ├── manage.py             # Django management
│   ├── .env                  # Environment variables
│   └── Dockerfile            # Backend container config
├── frontend/
│   ├── src/
│   │   ├── main.ts           # Application entry point
│   │   ├── api.ts            # API communication layer
│   │   └── types.ts          # TypeScript type definitions
│   ├── index.html            # HTML template
│   ├── package.json          # Node.js dependencies
│   ├── tsconfig.json         # TypeScript configuration
│   └── Dockerfile            # Frontend container config
├── docker-compose.yml        # Multi-container orchestration
└── README.md                # This file
```

## Quick Start with Docker

### Prerequisites
- Docker and Docker Compose installed
- Git for cloning the repository

### 1. Clone and Start
```bash
# Clone the repository
git clone <your-repository-url>
cd mini-projet-pratique

# Start all services (clean installation)
docker-compose down -v
docker-compose up --build
```

### 2. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000/api/candidates/
- **Django Admin**: http://localhost:8000/admin

### 3. Verify Installation
```bash
# Check all containers are running
docker ps

# Test API endpoint
curl http://localhost:8000/api/candidates/

# Should return: []
```

## Manual Setup

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables (see Environment Variables section)

# Run migrations
python manage.py makemigrations api
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## API Documentation

### Base URL
```
http://localhost:8000/api
```

### Endpoints

#### 1. List All Candidates
```http
GET /api/candidates/
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "skills": "Python, Django, React",
    "cv": "http://localhost:8000/api/candidates/1/cv/"
  }
]
```

#### 2. Create New Candidate
```http
POST /api/candidates/
Content-Type: multipart/form-data
```

**Body:**
- `name`: String (required)
- `email`: String (required, unique)
- `skills`: String (required, comma-separated)
- `cv`: File (required, PDF/DOC/DOCX)

#### 3. Filter Candidates by Skill
```http
GET /api/candidates/?skill=Python
```

#### 4. Download Candidate CV
```http
GET /api/candidates/{id}/cv/
```

## Usage Examples

### Using Postman or cURL

1. **Create Candidate**:
```bash
curl -X POST http://localhost:8000/api/candidates/ \
  -F "name=John Doe" \
  -F "email=john@example.com" \
  -F "skills=Python,Django" \
  -F "cv=@/path/to/cv.pdf"
```

2. **List Candidates**:
```bash
curl http://localhost:8000/api/candidates/
```

3. **Filter by Skill**:
```bash
curl "http://localhost:8000/api/candidates/?skill=Python"
```

## Environment Variables

Create a `.env` file in the **backend directory**:

```env
# Database Configuration
POSTGRES_DB=Candidat_DB
POSTGRES_USER=anass
POSTGRES_PASSWORD=anassDB975@-]
POSTGRES_HOST=db
POSTGRES_PORT=5432

# Django Settings
DEBUG=True
SECRET_KEY=anass975@Akl-]
```

**Important**: 
- For Docker: use `POSTGRES_HOST=db`
- For local development: use `POSTGRES_HOST=localhost`

## Troubleshooting

### Common Issues

1. **Containers not starting**: Run `docker-compose logs <service-name>` to see error details
2. **Database connection errors**: Ensure PostgreSQL container is healthy with `docker ps`
3. **Migration errors**: Run migrations manually: `docker exec -it django_backend python manage.py migrate`
4. **Frontend API errors**: Check browser console for network errors

### Reset Everything
```bash
# Complete reset (removes all data)
docker-compose down -v
docker system prune -f
docker-compose up --build
```

## Deployment Notes

For production deployment:
- Set `DEBUG=False` in environment variables
- Use secure database credentials
- Configure `ALLOWED_HOSTS` in Django settings
- Use a production WSGI server like Gunicorn
- Set up proper SSL certificates
- Use environment-specific docker-compose files# Candidate Management System

A full-stack web application for managing job candidates, built with Django REST Framework and TypeScript. This project demonstrates end-to-end development capabilities including API design, database modeling, and modern frontend implementation.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start with Docker](#quick-start-with-docker)
- [Manual Setup](#manual-setup)
- [API Documentation](#api-documentation)
- [Usage Examples](#usage-examples)
- [Environment Variables](#environment-variables)

## Features

- **Candidate Management**: Create, list, and search candidates
- **File Upload**: CV upload support (PDF, DOC, DOCX)
- **Real-time Filtering**: Dynamic search by skills using TypeScript
- **REST API**: Clean API endpoints with proper error handling
- **Responsive UI**: Modern interface with Vite + TypeScript
- **Dockerized**: Complete containerization for easy deployment
- **Type Safety**: Strict TypeScript typing throughout the frontend

## Tech Stack

### Backend
- **Django 4.2** - Web framework
- **Django REST Framework** - API development
- **PostgreSQL 13** - Database
- **Python-dotenv** - Environment management
- **django-cors-headers** - CORS handling

### Frontend
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client for API calls
- **Vanilla TypeScript**

### DevOps
- **Docker & Docker Compose** - Containerization
- **PostgreSQL 13** - Production-ready database

## Project Structure

```
mini-projet-pratique/
├── backend/
│   ├── api/
│   │   ├── models.py          # Candidate data model
│   │   ├── serializers.py     # API serialization
│   │   ├── views.py           # API endpoints
│   │   └── urls.py            # URL routing
│   ├── project_config/
│   │   ├── settings.py        # Django configuration
│   │   └── urls.py            # Main URL config
│   ├── requirements.txt       # Python dependencies
│   ├── manage.py             # Django management
│   ├── .env                  # Environment variables
│   └── Dockerfile            # Backend container config
├── frontend/
│   ├── src/
│   │   ├── main.ts           # Application entry point
│   │   ├── api.ts            # API communication layer
│   │   └── types.ts          # TypeScript type definitions
│   ├── index.html            # HTML template
│   ├── package.json          # Node.js dependencies
│   ├── tsconfig.json         # TypeScript configuration
│   └── Dockerfile            # Frontend container config
├── docker-compose.yml        # Multi-container orchestration
└── README.md                # This file
```

## Quick Start with Docker

### Prerequisites
- Docker and Docker Compose installed
- Git for cloning the repository

### 1. Clone and Start
```bash
# Clone the repository
git clone https://github.com/anass1209/mini-projet-pratique/tree/anass-elachham
cd mini-projet-pratique

# Start all services (clean installation)
docker-compose down -v
docker-compose up --build
```

### 2. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000/api/candidates/
- **Django Admin**: http://localhost:8000/admin

### 3. Verify Installation
```bash
# Check all containers are running
docker ps

# Test API endpoint
curl http://localhost:8000/api/candidates/

# Should return: []
```

## Manual Setup

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables (see Environment Variables section)

# Run migrations
python manage.py makemigrations api
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## API Documentation

### Base URL
```
http://localhost:8000/api
```

### Endpoints

#### 1. List All Candidates
```http
GET /api/candidates/
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "anass",
    "email": "anas.elachham@gmail.com",
    "skills": "Python, Django, React",
    "cv": "http://localhost:8000/media/cvs/Cv_Anass_El-achham_anglais.pdf"
  }
]
```

#### 2. Create New Candidate
```http
POST /api/candidates/
Content-Type: multipart/form-data
```

**Body:**
- `name`: String (required)
- `email`: String (required, unique)
- `skills`: String (required, comma-separated)
- `cv`: File (required, PDF/DOC/DOCX)

#### 3. Filter Candidates by Skill
```http
GET /api/candidates/?skill=Python
```

#### 4. Download Candidate CV
```http
GET /api/candidates/{id}/cv/
```

## Usage Examples

### Using Postman or cURL

1. **Create Candidate**:
```bash
curl -X POST http://localhost:8000/api/candidates/ \
  -F "name=Anass" \
  -F "email=anass@example.com" \
  -F "skills=Python,Django" \
  -F "cv=@/path/to/cv.pdf"
```

2. **List Candidates**:
```bash
curl http://localhost:8000/api/candidates/
```

3. **Filter by Skill**:
```bash
curl "http://localhost:8000/api/candidates/?skill=Python"
```

## Environment Variables

Create a `.env` file in the **backend directory**:

```env
# Database Configuration
POSTGRES_DB=Candidat_DB
POSTGRES_USER=anass
POSTGRES_PASSWORD=anassDB975@-]
POSTGRES_HOST=db
POSTGRES_PORT=5432

# Django Settings
DEBUG=True
SECRET_KEY=anass975@Akl-]
```

**Important**: 
- For Docker: use `POSTGRES_HOST=db`
- For local development: use `POSTGRES_HOST=localhost`

### Reset Everything
```bash
# Complete reset (removes all data)
docker-compose down -v
docker system prune -f
docker-compose up --build
```

