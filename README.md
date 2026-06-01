#  LexiMind AI

### Enterprise Legal Review Platform — AI-Powered Contract Ingestion, Risk Discovery & Compliance

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110+-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org/)
[![Google Cloud](https://img.shields.io/badge/Google_Cloud-Run-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)](https://cloud.google.com/run)
[![JWT](https://img.shields.io/badge/Auth-JWT%20%2B%20BCrypt-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)

*A full-stack, cloud-native enterprise legal platform that ingests contracts at scale, applies AI-driven risk discovery, and enforces compliance workflows — giving legal teams instant, intelligent visibility into their entire contract portfolio.*

[Features](#-key-features) · [Architecture](#-system-architecture) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [API Docs](#-api-layer) · [Deployment](#-deployment-architecture)

---

##  Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Cloud Infrastructure](#-cloud-infrastructure)
- [Security & Authentication](#-security--authentication)
- [API Layer](#-api-layer)
- [Getting Started](#-getting-started)
- [Database Design](#-database-design)
- [Development](#-development)
- [Future Enhancements](#-future-enhancements)

---

##  Project Overview

**LexiMind AI** is an enterprise-grade legal review platform built for organizations that need to manage, analyze, and mitigate risk across large volumes of legal contracts. It combines a high-performance React frontend with a robust Python FastAPI backend, an intelligent AI risk-discovery layer, and Google Cloud-native infrastructure to deliver real-time compliance intelligence at scale.

The platform ingests contracts in multiple formats (PDF, DOCX, plain text) through automated pipelines, processes them through **AI risk-discovery services** for clause-level analysis, obligation extraction, and policy compliance checking, persists structured findings to **PostgreSQL**, and surfaces actionable insights through a sleek **React** dashboard with interactive risk heatmaps, deadline tracking, and team-based review workflows.

**Core use cases:**
- Automated contract ingestion and structured clause extraction
- AI-driven risk discovery, scoring, and obligation flagging
- Regulatory and policy compliance monitoring across contract portfolios
- End-to-end legal review workflow management with audit trails
- Executive reporting on portfolio-level risk exposure and remediation status

---

##  Key Features

- **Contract Ingestion Pipeline** — Upload and process contracts in PDF, DOCX, and plain-text formats with automated clause segmentation and metadata extraction
- **AI Risk Discovery** — Python AI services identify high-risk clauses, non-standard language, missing obligations, and policy deviations with confidence scoring
- **Compliance Monitoring** — Continuously evaluate contracts against configurable regulatory frameworks and internal policy rulesets
- **Interactive Review Dashboard** — Responsive React UI with risk heatmaps, obligation timelines, and drill-down clause review capabilities
- **Cloud-Native on Google Cloud** — Fully containerized on Cloud Run with Cloud Armor WAF protection and Secret Manager for credential management
- **Secure by Default** — JWT authentication, BCrypt password hashing, CORS policy enforcement, and TLS in transit
- **Automated CI/CD** — GitHub Actions pipelines trigger Cloud Build for image builds, push artifacts to Artifact Registry, and deploy to Cloud Run on every merge
- **Full Audit Trail** — Every review action, risk acknowledgment, and compliance decision is logged for regulatory reporting

---

##  System Architecture

The platform follows a layered, service-oriented architecture optimized for document throughput, AI workload isolation, and enterprise-grade security.

```mermaid
flowchart TD
    A[" Legal Users / Clients\nBrowser · Desktop · Third-party Integrations"]

    subgraph FE["Frontend Layer"]
        B[" React.js Frontend\nBabel · Tailwind CSS · React Router · Recharts"]
    end

    subgraph BE["Backend Layer"]
        C[" FastAPI Backend\nPython · Uvicorn · Pydantic · JWT Auth · BCrypt · CORS"]
        D[(" PostgreSQL\nSQLAlchemy ORM\nMigrations")]
        E[" AI Risk Discovery\nClause NLP · Risk Scoring\nObligation Extraction"]
        F[" Google Cloud\nCloud Run · Cloud Armor\nSecret Manager"]
    end

    subgraph DevOps["DevOps & Deployment Layer"]
        G[" GitHub Actions"]
        H[" Cloud Build"]
        I[" Artifact Registry"]
        J[" Cloud Run"]
    end

    A -- "HTTPS" --> B
    B -- "REST API / JSON" --> C
    C --- D
    C --- E
    C --- F
    G --> H --> I --> J
```

---

##  Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| **React.js** | 18.x | UI component framework for the legal review dashboard |
| **Tailwind CSS** | 3.x | Utility-first CSS for rapid, consistent UI development |
| **Babel** | 7.x | JavaScript transpilation for broad browser compatibility |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| **Python** | 3.11+ | Primary backend language and AI services runtime |
| **FastAPI** | 0.110+ | High-performance async REST API framework |
| **Uvicorn** | 0.29+ | Production-grade ASGI server for FastAPI |
| **Pydantic** | 2.x | Request/response validation and settings management |
| **PostgreSQL** | 16 | Primary relational database for contracts, risks, and users |
| **SQLAlchemy** | 2.x | ORM and async database toolkit |

### Cloud (Google Cloud)
| Service | Purpose |
|---|---|
| **Cloud Run** | Fully managed, serverless container execution for backend and frontend services |
| **Cloud Armor** | Web Application Firewall (WAF) for DDoS protection and OWASP rule enforcement |
| **Secret Manager** | Centralized, encrypted storage for API keys, DB credentials, and JWT secrets |

### DevOps
| Technology | Purpose |
|---|---|
| **GitHub Actions** | CI/CD pipelines for automated testing, linting, and deployment triggers |
| **Cloud Build** | Google-managed build service for Docker image compilation |
| **Artifact Registry** | Private container registry for versioned Docker images |

### Security
| Technology | Purpose |
|---|---|
| **JWT (JSON Web Tokens)** | Stateless authentication with short-lived access tokens and refresh rotation |
| **BCrypt** | Industry-standard adaptive password hashing with configurable cost factor |
| **CORS** | Strict cross-origin resource sharing policy enforced at the FastAPI middleware layer |

---

##  Cloud Infrastructure

All cloud resources are provisioned and managed on **Google Cloud Platform** using infrastructure-as-code principles.

### Google Cloud Run — Serverless Container Execution

**Purpose:** Run the FastAPI backend and React frontend as stateless, auto-scaling containers without managing underlying infrastructure.

**Design:**
- Backend service deployed as a Cloud Run service with minimum instance warm-up to eliminate cold starts for legal workflows
- Frontend served from a separate Cloud Run service with CDN-backed static asset delivery
- Services communicate over private VPC connectors; only the load balancer endpoint is public-facing
- Automatic horizontal scaling on request volume; scales to zero in non-business hours to minimize cost

### Google Cloud Armor — Web Application Firewall

**Purpose:** Protect the platform against DDoS attacks, common web exploits, and OWASP Top 10 vulnerabilities at the network edge.

**Rules configured:**
- OWASP Core Rule Set (SQL injection, XSS, RFI/LFI)
- IP allowlist enforcement for admin API paths
- Rate limiting per client IP to prevent brute-force on the auth endpoints
- Geo-based restrictions configurable per enterprise client policy

### Google Secret Manager — Credential Management

**Purpose:** Eliminate hard-coded secrets by centralizing all sensitive configuration values with IAM-governed access and full rotation support.

**Secrets managed:**
- `leximind/db-url` — PostgreSQL connection string (user, password, host, db name)
- `leximind/jwt-secret` — JWT signing key with scheduled 90-day rotation
- `leximind/ai-api-key` — API key for external AI model services
- `leximind/cors-origins` — Allowlisted frontend origins per environment

All secrets are accessed at runtime by the Cloud Run service identity — no secrets are stored in environment files or container images.

---

##  Security & Authentication

Security is built into every layer of the platform, following OWASP best practices and Google Cloud Well-Architected Framework security guidelines.

### Authentication Flow

```mermaid
sequenceDiagram
    participant C as  Client
    participant A as  FastAPI Auth Router
    participant DB as  PostgreSQL
    participant P as  Protected Endpoints

    C->>A: POST /api/v1/auth/login {email, password}
    A->>DB: Lookup user by email
    DB-->>A: Return password_hash
    A->>A: BCrypt verify (cost factor 12)
    A-->>C: JWT Access Token (15 min TTL, RS256)
    A-->>C: JWT Refresh Token (7 day TTL, HttpOnly cookie)

    C->>P: Request + Bearer Access Token
    P->>P: Validate JWT signature & expiry
    P->>P: Resolve user role & matter-level permissions
    P->>P: Inject user context into request scope
    P-->>C: 200 OK + Protected Resource
```

### Security Layers

- **Transport:** All traffic over TLS 1.2+; Cloud Armor terminates SSL at the edge
- **Authentication:** JWT access tokens (short-lived) with BCrypt-hashed credentials
- **Authorization:** Role-based access control — Reviewer, Approver, Admin scopes enforced per endpoint
- **CORS:** Strict origin allowlist configured via Secret Manager; only registered frontend origins accepted
- **Secrets:** Zero secrets in code or container images; all credentials fetched from Secret Manager at runtime
- **Audit:** Every authenticated action written to `audit_log` table with user, timestamp, IP, and resource reference

---

##  API Layer

The FastAPI backend exposes a versioned RESTful API at `/api/v1/`. Auto-generated interactive documentation is available at `/docs` (Swagger UI) and `/redoc` in non-production environments.

### Core Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/v1/auth/register` | Register a new legal team user |
| `POST` | `/api/v1/auth/login` | Authenticate and obtain JWT access + refresh tokens |
| `POST` | `/api/v1/auth/refresh` | Rotate access token using a valid refresh token |
| `DELETE` | `/api/v1/auth/logout` | Revoke the current refresh token |
| `GET` | `/api/v1/contracts` | List all ingested contracts (paginated, filterable by status/risk) |
| `POST` | `/api/v1/contracts` | Upload and ingest a new contract document |
| `GET` | `/api/v1/contracts/{id}` | Retrieve a single contract with full clause breakdown |
| `PUT` | `/api/v1/contracts/{id}` | Replace contract metadata or resubmit for re-analysis |
| `DELETE` | `/api/v1/contracts/{id}` | Remove a contract and all associated risk findings |
| `GET` | `/api/v1/risks` | List all risk findings (filterable by severity, type, contract) |
| `GET` | `/api/v1/risks/{id}` | Retrieve a single risk finding with clause context and AI rationale |
| `PATCH` | `/api/v1/risks/{id}` | Acknowledge, escalate, or resolve a risk finding |
| `POST` | `/api/v1/analysis/run` | Trigger on-demand AI risk analysis for a given contract |
| `GET` | `/api/v1/compliance/checks` | List compliance check results across the contract portfolio |
| `POST` | `/api/v1/compliance/checks` | Run a compliance check against a specific ruleset |
| `GET` | `/api/v1/compliance/rules` | List configured compliance rulesets |
| `POST` | `/api/v1/compliance/rules` | Create a new compliance ruleset |
| `PUT` | `/api/v1/compliance/rules/{id}` | Update an existing compliance ruleset |
| `GET` | `/api/v1/users` | List team users (Admin only) |
| `GET` | `/api/v1/users/{id}` | Retrieve a user profile |
| `PATCH` | `/api/v1/users/{id}` | Update user role or status |
| `GET` | `/api/v1/health` | Liveness and readiness probe for Cloud Run |
| `GET` | `/docs` | Swagger UI (non-production only) |
| `GET` | `/redoc` | ReDoc API documentation |

---

##  Database Design

PostgreSQL is the system of record for all contract data, risk findings, compliance results, and user management. The schema is managed through **SQLAlchemy** models and Alembic-style migrations.

### Core Tables

```sql
-- Users and authentication
users                (id, email, password_hash, role, full_name, created_at, is_active)
refresh_tokens       (id, user_id, token_hash, expires_at, revoked_at)

-- Contract management
contracts            (id, title, status, file_path, file_type, uploaded_by, ingested_at, metadata JSONB)
clauses              (id, contract_id, clause_type, content, position, extracted_at)

-- AI risk discovery
risk_findings        (id, contract_id, clause_id, risk_type, severity, score, rationale, status, discovered_at, resolved_at)
analysis_runs        (id, contract_id, triggered_by, model_version, started_at, completed_at, summary JSONB)

-- Compliance
compliance_rules     (id, name, framework, condition_logic JSONB, created_by, is_active)
compliance_checks    (id, contract_id, rule_id, result, details JSONB, checked_at)

-- Audit
audit_log            (id, user_id, action, resource_type, resource_id, timestamp, ip_address)
```

### Performance Optimizations

- **Partial indexes** — `WHERE status = 'open'` indexes on `risk_findings` for fast active risk lookups
- **JSONB indexing** — GIN indexes on `metadata` and `condition_logic` for flexible ad-hoc filtering
- **Foreign key cascades** — Deleting a contract cascades to clauses, risk findings, and compliance checks cleanly
- **Read-optimized views** — Materialized views for portfolio-level risk summary dashboards, refreshed nightly

---

##  Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.11+
- PostgreSQL 16 (local or Cloud SQL)
- Google Cloud CLI (configured with appropriate project and IAM credentials)
- Docker (optional, for containerized local development)

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/leximind-ai.git
cd leximind-ai
```

### 2. Configure Environment Variables

```bash
# Backend
cp leximind-backend/.env.example leximind-backend/.env

# Frontend
cp src/.env.example src/.env
```

**Backend `.env`:**
```env
DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/leximind
SECRET_KEY=your-jwt-secret-key
BCRYPT_COST=12
CORS_ORIGINS=http://localhost:3000
GCP_PROJECT_ID=your-gcp-project-id
```

**Frontend `.env`:**
```env
REACT_APP_API_URL=http://localhost:8000
```

### 3. Backend Setup & Run

```bash
cd leximind-backend
python -m venv venv
source venv/bin/activate         # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API available at: `http://localhost:8000`
Swagger docs at: `http://localhost:8000/docs`

### 4. Frontend Setup & Run

```bash
cd src
npm install
npm run start
```

Frontend available at: `http://localhost:3000`

---

##  Development

### Available Scripts

**Frontend (`/src`)**

| Script | Description |
|---|---|
| `npm run start` | Start the React development server with hot reload at `http://localhost:3000` |
| `npm run build` | Produce an optimized production build in `build/` |
| `npm run test` | Run the Jest test suite |
| `npm run lint` | Run ESLint across all source files |

**Backend (`/leximind-backend`)**

| Script | Description |
|---|---|
| `uvicorn app.main:app --reload` | Start FastAPI development server with auto-reload |
| `alembic upgrade head` | Apply all pending database schema migrations |
| `alembic revision --autogenerate -m "msg"` | Generate a new migration from model changes |
| `pytest` | Run the full backend test suite |
| `ruff check .` | Lint Python source files |

### Project Structure

```
leximind-ai/
│
├── src/                                  # React.js frontend application
│   ├── index.js                          # App entry point and DOM mounting
│   ├── App.js                            # Root component and top-level routing
│   ├── pages/                            # Full-page view components
│   │   ├── Dashboard.jsx                 # Portfolio overview and risk summary
│   │   ├── ContractReview.jsx            # Single contract clause-level review
│   │   ├── RiskFindings.jsx              # Filterable risk findings feed
│   │   ├── ComplianceChecks.jsx          # Compliance check results and rules
│   │   ├── UploadContract.jsx            # Contract ingestion form
│   │   ├── LandingPage.jsx               # Public marketing page
│   │   ├── Login.jsx                     # User authentication
│   │   └── Signup.jsx                    # New user registration
│   ├── components/                       # Reusable UI components
│   │   ├── RiskCard.jsx                  # Risk finding card with severity badge
│   │   ├── ClauseViewer.jsx              # Highlighted clause display component
│   │   ├── ComplianceBadge.jsx           # Pass/fail compliance indicator
│   │   ├── Button.jsx                    # Styled button primitive
│   │   ├── Navbar.jsx                    # Top navigation bar
│   │   └── Footer.jsx                    # Site footer
│   ├── hooks/                            # Custom React hooks
│   │   ├── useContracts.js               # Contract list fetching and caching
│   │   └── useRisks.js                   # Risk findings fetching with filters
│   ├── styles/                           # Tailwind config and global CSS
│   ├── assets/                           # Images, icons, and static files
│   ├── .env.example
│   └── package.json
│
├── leximind-backend/                     # FastAPI Python application
│   ├── app/
│   │   ├── main.py                       # App factory, middleware, and startup
│   │   ├── api/
│   │   │   └── v1/
│   │   │       └── routes/               # Route handlers per resource
│   │   │           ├── auth.py           # Authentication endpoints
│   │   │           ├── contracts.py      # Contract ingestion and retrieval
│   │   │           ├── risks.py          # Risk finding management
│   │   │           ├── compliance.py     # Compliance check and rules endpoints
│   │   │           └── users.py          # User management
│   │   ├── core/                         # Config, security, and shared utilities
│   │   │   ├── config.py                 # Settings loaded from Secret Manager / .env
│   │   │   ├── security.py               # JWT issuance, BCrypt hashing, CORS setup
│   │   │   └── dependencies.py           # FastAPI dependency injectors
│   │   ├── models/                       # SQLAlchemy ORM model definitions
│   │   ├── schemas/                      # Pydantic request/response schemas
│   │   ├── services/                     # Business logic layer
│   │   │   ├── ingestion_service.py      # Contract parsing and clause extraction
│   │   │   ├── risk_service.py           # AI risk discovery orchestration
│   │   │   └── compliance_service.py     # Compliance rule evaluation engine
│   │   └── repositories/                 # Database access layer (CRUD)
│   ├── alembic/                          # Database migration scripts
│   ├── tests/                            # Pytest test suite
│   ├── requirements.txt
│   └── .env.example
│
├── .github/
│   └── workflows/
│       ├── ci.yml                        # Lint, test, and build on pull request
│       └── deploy.yml                    # Cloud Build + Cloud Run deploy on main merge
│
└── cloudbuild.yaml                       # Google Cloud Build pipeline definition
```

---

##  Deployment Architecture

### Google Cloud Run

Both the frontend (served as a static build via a lightweight server) and the FastAPI backend are deployed as separate Cloud Run services. Deployments are fully automated via GitHub Actions + Cloud Build.

### CI/CD Pipeline (GitHub Actions)

```mermaid
flowchart TD
    PR[" Pull Request Opened"] --> L[" Lint\nESLint + Ruff"]
    L --> T[" Tests\nPytest + React Testing Library"]
    T --> B[" Docker Build Validation\nvia Cloud Build"]
    B --> R{Review & Merge?}

    R -- " Changes Requested" --> PR
    R -- " Merged to Main" --> CB[" Cloud Build\nBuild Backend + Frontend Images"]
    CB --> AR[" Push to Artifact Registry\nTagged with Git SHA"]
    AR --> D1[" Deploy Backend\nCloud Run: leximind-backend"]
    AR --> D2[" Deploy Frontend\nCloud Run: leximind-frontend"]
    D1 --> S[" Smoke Tests\nLive Cloud Run endpoint"]
    D2 --> S
    S --> N[" Notify Team\nSuccess or Failure"]
```

### Cloud Build (`cloudbuild.yaml`)

```mermaid
flowchart LR
    S[" Cloud Build Triggered"] --> B1[" Build Backend\nDocker Image"]
    S --> B2[" Build Frontend\nDocker Image"]
    B1 --> P[" Push to Artifact Registry\nTagged: Git SHA"]
    B2 --> P
    P --> D1[" Deploy Backend\nCloud Run: leximind-backend"]
    P --> D2[" Deploy Frontend\nCloud Run: leximind-frontend"]
```

### Environment Promotion

| Environment | Trigger | Cloud Run Service |
|---|---|---|
| **Development** | Feature branch push | `leximind-dev` |
| **Staging** | PR merge to `staging` | `leximind-staging` |
| **Production** | PR merge to `main` | `leximind-prod` |

---

##  Future Enhancements

| Enhancement | Description | Priority |
|---|---|---|
| **LLM-Powered Clause Q&A** | Allow legal reviewers to ask natural-language questions directly against a contract — "Does this agreement include an auto-renewal clause?" | High |
| **Multi-tenancy** | Organization-level data isolation with row-level PostgreSQL security and per-tenant compliance ruleset management | High |
| **Contract Comparison** | Side-by-side diff view for comparing contract versions or benchmarking against a standard template | High |
| **E-Signature Integration** | Native integration with DocuSign / Adobe Sign to complete the review-to-execution workflow in a single platform | Medium |
| **Obligation Calendar** | Automated extraction of deadlines, notice periods, and renewal dates surfaced as a team-shared compliance calendar | Medium |
| **Regulatory Feed** | Auto-ingest regulatory updates (GDPR, CCPA, SOX) and re-evaluate affected contracts when rules change | Medium |
| **Mobile App** | React Native companion for reviewing flagged risks and approving contracts on the go | Low |
| **Analytics Reporting** | Exportable portfolio-level risk and compliance reports (PDF, CSV) for executive and board-level review | Medium |

---

##  Troubleshooting

**Dependency issues (frontend):** Delete `node_modules` and `package-lock.json`, then re-run `npm install`.

**Database connection failures:** Ensure PostgreSQL is running and `DATABASE_URL` is correctly set in `.env`. Test connectivity with `psql $DATABASE_URL` before starting Uvicorn.

**JWT errors (401 Unauthorized):** Verify `SECRET_KEY` in `.env` matches across all backend instances. Tokens signed with a different key will always fail validation.

**Cloud Run deployment failures:** Check Cloud Build logs in the GCP Console for image build errors. Verify the Cloud Run service account has `roles/secretmanager.secretAccessor` to read credentials at startup.

**CORS errors in the browser:** Confirm the frontend origin (e.g., `http://localhost:3000`) is included in `CORS_ORIGINS` in the backend `.env` or Secret Manager entry.

---