# ADR 0005: Integrate Security Scanning

## Status
Accepted

## Context
Security is a critical aspect of any web application, even for static websites. We need to ensure that the code and dependencies are free from known vulnerabilities to maintain the integrity and safety of the website.

## Decision
We chose to **integrate security scanning** into the GitHub Actions pipeline using open-source tools like **OWASP Dependency-Check** and **Snyk**. This allows us to automatically detect vulnerabilities in dependencies and code during the CI/CD process.

## Alternatives Considered
- **Manual Security Checks**: Running security audits manually, which would be time-consuming and error-prone.
- **External Services**: Using external security services, but integrating them into the CI/CD pipeline was preferred for automation and better control.

## Consequences
- **Pros**: Automatic detection of vulnerabilities during the development cycle, ensuring a secure deployment pipeline.
- **Cons**: Adds extra time to the CI/CD pipeline due to the scanning process, though this is acceptable for better security.

## Date
2025-04-17

## Author
Thulani
