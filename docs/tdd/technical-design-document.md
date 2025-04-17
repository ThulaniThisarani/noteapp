# 🛠️ Technical Design Document (TDD)

## 📘 Project Title:
Static Website Deployment with CI/CD Pipeline using AWS S3 and GitHub Actions

## 🧩 Overview
This document outlines the architecture, design decisions, and implementation plan for deploying a static website using HTML, CSS, and JavaScript to an AWS S3 bucket with a CI/CD pipeline powered by GitHub Actions.

---

## 🧱 1. Architecture Overview

### 🔹 Frontend Stack
- **HTML** – Markup for static content
- **CSS** – Styling
- **JavaScript** – Client-side interactivity

### 🔹 Hosting & Deployment
- **AWS S3** – For static website hosting
- **GitHub Actions** – CI/CD automation
- **CloudFront (optional)** – CDN for caching and performance

---

## 🔄 2. CI/CD Pipeline Design

### Workflow:
1. **Push to main branch**
2. **Run matrix tests (Node.js versions)**
3. **Build and validate project (optional)**
4. **Deploy to AWS S3**
5. **(Optional)** Notify success/failure

### Secrets:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_S3_BUCKET`
- `AWS_REGION`

---

## 🔐 3. Security Considerations
- Environment secrets stored securely via GitHub Secrets
- HTTPS enforced via S3 or CloudFront
- IAM user with least privileges created for deployment

---


---

## ⚙️ 4. Design Decisions

| Decision                             | Reason                                                                 |
|--------------------------------------|------------------------------------------------------------------------|
| Use GitHub Actions                   | Native CI/CD integration, free for public repos                        |
| Use AWS S3 for hosting               | Cost-effective and reliable for static sites                           |
| Store credentials in GitHub Secrets | Avoids hardcoding sensitive information                                |
| No backend or API                    | Simpler architecture for static content                                |

---

## 📈 5. Future Enhancements
- Add CloudFront for performance and global caching
- Add monitoring and alerting (e.g., with CloudWatch or UptimeRobot)
- Multi-environment support (dev, staging, prod)
- Add tests and build steps in CI pipeline

---

## ✅ 6. Success Criteria
- Website is publicly accessible via S3 bucket URL
- All changes to `main` trigger automated deployment
- CI workflow passes without manual intervention
- Version control is enforced via GitHub

---

## 📚 References
- [AWS S3 Static Website Hosting Docs](http://my-html-host-bucket.s3-website-us-east-1.amazonaws.com)




