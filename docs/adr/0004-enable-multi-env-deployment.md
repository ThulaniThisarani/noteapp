# ADR 0004: Enable Multi-Environment Deployment

## Status
Accepted

## Context
As the project progresses, it is necessary to deploy and test on multiple environments such as development, staging, and production to ensure stability, security, and performance before going live.

## Decision
We decided to implement a **multi-environment deployment pipeline** using GitHub Actions. This allows us to deploy to different AWS S3 buckets based on the branch (e.g., `dev`, `staging`, `main`).

## Alternatives Considered
- **Single Environment Deployment**: Deploying directly to production after every push to the `main` branch. This would reduce complexity but introduces risks.
- **Manual Deployments**: Deploying to different environments manually using the AWS S3 Console, which was too error-prone and inefficient.

## Consequences
- **Pros**: Ensures that each environment (development, staging, production) is isolated and independently deployable. Reduces risks to the production environment.
- **Cons**: Adds some complexity to the deployment pipeline but this is mitigated by automation.

## Date
2025-04-17

## Author
Thulani
