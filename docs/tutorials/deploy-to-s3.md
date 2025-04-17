# 📘 Tutorial: Deploying Your Website to AWS S3
This tutorial provides beginner-friendly, step-by-step instructions on how to deploy a static website (HTML, CSS, JavaScript) to Amazon S3 using GitHub Actions.

🚀 Prerequisites
Basic knowledge of Git and GitHub

An AWS account

A GitHub repository with your website code (HTML/CSS/JS)

# ✅ Step 1: Create an S3 Bucket
Go to the AWS S3 Console.

Click “Create bucket”.

Give your bucket a unique name (e.g., my-portfolio-site).

Choose a region (e.g., us-east-1).

Uncheck “Block all public access” under permissions.

Create the bucket.

# 🌐 Step 2: Enable Static Website Hosting
Go to your newly created bucket.

Click on the “Properties” tab.

Scroll to “Static website hosting”.

Choose “Enable”.

Set:

Index document: index.html

Error document (optional): 404.html

Save changes.

# 🔓 Step 3: Set Bucket Permissions
Go to the “Permissions” tab of your bucket.

Under Bucket policy, paste this (replace with your bucket name):

json

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-portfolio-site/*"
    }
  ]
}
Click Save.

# 🔐 Step 4: Create an IAM User and Get Access Keys
Go to the IAM Console.

Create a user with programmatic access.

Attach the AmazonS3FullAccess policy.

Download the Access Key ID and Secret Access Key.

# 🤫 Step 5: Configure GitHub Secrets
Go to your GitHub repository.

Navigate to Settings > Secrets > Actions.

Add the following secrets:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

AWS_S3_BUCKET (your bucket name)

AWS_REGION (e.g., us-east-1)

# ⚙️ Step 6: Add GitHub Actions Workflow
In your repo, create .github/workflows/deploy.yml and add:

yaml

name: Full CI/CD Pipeline with S3 Deployment

on:
  push:
    branches:
    - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: jakejarvis/s3-sync-action@master
        with:
          args: --acl public-read --follow-symlinks --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: ${{ secrets.AWS_REGION }}
# ✅ Step 7: Push Your Code to Deploy
Commit and push your changes to the main branch.

GitHub Actions will automatically deploy your site to S3.

# 🌍 Step 8: Visit Your Website
Go back to your S3 bucket > Properties > Static Website Hosting

Copy the Bucket website endpoint

Open it in your browser 🎉
