# 🧰 Operations Runbook

## 📘 Purpose

This runbook provides daily operational tasks, incident response actions, and recovery procedures for the website hosted on AWS S3 and deployed via GitHub Actions. It helps ensure high availability, fast recovery, and proper maintenance.

---

## 📅 Daily Operations Checklist

| Task                       | Description                                               |
|----------------------------|-----------------------------------------------------------|
| ✅ Check Website Uptime    | Visit the production URL and ensure it loads correctly    |
| ✅ Verify GitHub Actions   | Confirm the latest workflow run succeeded                 |
| ✅ Inspect S3 Bucket       | Check `index.html` and assets are properly deployed       |
| ✅ DNS Validation          | Make sure the domain correctly points to the S3 bucket    |

---

## 🚦 Health Checks

### Manual Check:
1. Visit the production website (e.g., `https://www.example.com`)
2. Confirm:
   - The homepage loads
   - Navigation works
   - Styles and images display properly

### Synthetic Monitoring (Optional):
- Use external services like:
  - [[UptimeRobot](https://uptimerobot.com/](https://stats.uptimerobot.com/GyAZgz1U6C))
 

---

## 🚨 Common Alerts & Responses

### ⚠️ Incident: Website Down

**Possible Causes:**
- Misconfigured S3 permissions
- Static hosting disabled
- CI/CD pipeline failed


**Resolution Steps:**
1. Check S3 bucket settings: public access and hosting
2. Re-run GitHub Actions deployment
3. Review DNS records (if using custom domain)
4. Restore from backup if necessary

---

### ⚠️ Incident: CI/CD Pipeline Failure

**Steps to Resolve:**
1. Navigate to GitHub → Actions tab
2. Open the failed workflow
3. Review error logs:
   - Missing/invalid secrets
   - AWS credentials issues
   - Incorrect bucket name

4. Fix issues and commit changes to re-trigger deployment

---

### ⚠️ Incident: Wrong Content Deployed

**Steps to Resolve:**
1. Revert to last known good commit:
   ```bash
   git checkout <last-good-commit>
