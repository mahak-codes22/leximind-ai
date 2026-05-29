# LexiMind AI 

A professional, high-performance B2B Legal Tech application for contract management and automated compliance parsing. Carefully structured with a decoupled full-stack architecture to ensure scalability and high performance.

##  New Implementation 

### 1. High-Level Design (HLD) Flow
- **Decoupled Architecture**: Complete separation of frontend layout states from backend computational processes.
- **The Ingestion Event**: Instant user interaction for full CRUD operations.
- **The Network Handshake**: Asynchronous requests with a secure authorization header (`X-Token`).
- **The Data Gatekeeper**: Instant FastAPI verification using strong validation schemas.

### 2. Low-Level Design (LLD) Components
- **The Schema Gatekeeper**: Pydantic's `DocumentSchema` for strict runtime Python type-hinting checks.
- **The Controller Router**: Clear route orchestration via FastAPI decorators (`@router.post`, etc.).
- **The Service Engine**: The platform brain handling document sanitization and core business rules.
- **The Repository Interactor**: Scoped transactional boundaries powered by the SQLAlchemy ORM core.

### 3. Deep Tech Stack Analysis
- **Frontend Presentation**: Component-driven architecture using React.js context states.
- **Tailwind CSS Grid Layer**: Executive dark-mode configuration (`#09090b` zinc base) with dynamic layout parameters (`grid-cols-1 md:grid-cols-3 xl:grid-cols-12`).
- **API Microservice Loop**: Non-blocking asynchronous event handling through FastAPI and the Uvicorn worker pool.

### 4. API Contract Endpoint Directory
- Full CRUD execution spectrum mapped with explicit HTTP methods.
- Built-in error handling specifications (`422 Unprocessable Entity` for bad schema payloads, `404 Not Found` for missing document IDs).
- Secure Cross-Origin Resource Sharing (CORS) setup for localized client-server data streaming.

### 5. Production Workspace Layout
- Structured directory tree mapping frontend source files cleanly alongside backend modules to prevent merge dependencies.

### 6. Enterprise Expansion Roadmap
- **Spring Boot Core**: Scalable architecture mapped for a future Java-based distributed environment.
- **MySQL Persistence**: Structural SQL schemas and JDBC bindings ready to replace temporary volatile database buffers.

## Design System

### Color Palette
- **Primary Background**: Premium dark slate canvas (`#09090b` zinc core)
- **Accents**: Modern layout elements, highlighted data counters, and custom telemetry status fields

### Typography
- Inter/System font configuration for absolute multi-device responsive scaling
- High-readability dashboard metrics widgets and tabular text structures

## File Structure

```text
LEXIMIND AI/
│
├── leximind-backend/                     # Python FastAPI Core Backend
│   ├── requirements.txt                  # Python package dependencies
│   ├── .env                              # Secure environment configurations
│   └── app/
│       ├── main.py                       # App initialization & CORS configuration
│       ├── config/database.py            # SQLAlchemy MySQL session local binding
│       ├── controllers/                  # Endpoint routing module (document_controller.py)
│       ├── models/                       # Database relational tables (document_model.py)
│       ├── repositories/                 # Data Access Layer query executions
│       ├── schemas/                      # Pydantic schema validation layers
│       └── services/                     # Core Business logic workflow processing
│
└── src/                                  # React.js Dashboard Frontend
    ├── components/                       # ChatPanel, DocumentPanel, & Metrics UI blocks
    ├── hooks/useFetchDocuments.js        # Dynamic server connection hook
    ├── services/api.js                   # Base client URL connector instance
    ├── LexiMindDashboard.jsx             # Global Canvas Core Orchestrator
    └── package.json                      # Node ecosystem library registries