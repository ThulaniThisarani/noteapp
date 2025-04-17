# ADR 0002: Use GitHub Actions for CI/CD

## Status
Accepted

## Context
We needed a CI/CD solution to automate testing and deployment of our static website to AWS S3.

## Decision
We chose GitHub Actions because it is tightly integrated with GitHub, free for public repositories, and supports custom workflows like S3 deployment.

## Alternatives Considered
- GitLab CI: Powerful, but not natively integrated with GitHub.
- CircleCI: Feature-rich, but requires external setup and config.
- Jenkins: Highly customizable but heavy for a simple static site.

## Consequences
- Easy setup and configuration directly in the repository.
- Flexible YAML workflows for testing and deployment.
- Secure usage of AWS credentials through GitHub Secrets.

## Date
2025-04-17

## Author
Thulani
