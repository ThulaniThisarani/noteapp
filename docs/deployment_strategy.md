# Deployment Strategy

We have implemented a **Blue-Green Deployment Strategy** using GitHub Pages.

## Deployment Environments

- **Main branch** → Production (Live)
- **deploy branch** → Pre-Production (Testing Environment)

## Strategy Steps

1. All new features and changes are pushed to the `deploy` branch.
2. GitHub Pages is configured to deploy `deploy` separately.
3. We test the changes on the staging environment.
4. Once verified, we merge `deploy` into `main` to deploy to production.

This approach allows zero-downtime deployments and reduces the risk of bugs affecting the live environment.
