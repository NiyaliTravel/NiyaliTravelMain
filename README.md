# NiyaliTravel Platform

**Tagline:** Let the Indian Ocean Carry Your Story

---

## Overview

NiyaliTravel is a world-class, AI-driven travel agency platform specializing in personalized Maldives journeys with cinematic UX/UI, intelligent automation, and multi-channel integration. The platform is designed for scalability, security, and seamless user experience across travelers, agents, and admins.

---

## Repository Structure

- `/frontend` - Next.js + Tailwind CSS frontend application (mobile-first, accessible, SEO optimized)
- `/backend` - Supabase/PostgreSQL schemas and migration scripts, API microservices including AI microservice Neo
- `/cms` - Headless CMS integration and management tools
- `/crm` - Contact management, bulk upload/validation pipelines, and email campaign modules
- `/analytics` - Metrics and reporting dashboards
- `/voice` - Voice assistant integrations (Alexa, Google Action, Siri)
- `/tests` - E2E and unit tests (Cypress, Jest)
- `.github/workflows` - GitHub Actions CI/CD pipeline configuration files

---

## Key Features

- AI-powered booking, itinerary generation, and conversational assistant (Neo)
- Multi-channel integration with OTAs, ferry APIs, voice assistants
- Automated workflows handling >100k contacts
- Role-based access control (RBAC) for fine-grained permission management
- Comprehensive analytics dashboards and BI tools integration
- Secure, PCI-DSS compliant payments with Stripe and bank APIs
- Progressive Web App (PWA) support

---

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm
- PostgreSQL (Supabase recommended)
- Vercel account for frontend deployment
- Access to third-party API keys (Stripe, OTAs, Pinecone, SendGrid, etc.)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/niyalitravel.git
cd niyalitravel

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
