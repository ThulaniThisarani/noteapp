# ADR 0001: Use AWS S3 for Static Website Hosting

## Status
Accepted

## Context
We needed a reliable, low-cost way to host a static website built with HTML, CSS, and JavaScript.

## Decision
We chose AWS S3 with static website hosting enabled.

## Alternatives Considered
- **Netlify**: Easy setup, but less control over AWS-specific configurations.
- **GitHub Pages**: Limited flexibility for S3-integrated environments.

## Consequences
- Easy integration with AWS services (CloudFront, IAM, etc.)
- Secure and scalable hosting with pay-as-you-go pricing.
- Slight learning curve for IAM and permissions.

## Date
2025-04-17

## Author
Thulani
