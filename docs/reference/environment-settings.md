                                                          Title: Environment Variables and AWS Settings

This document provides details about the environment variables, AWS settings, and commands used in the project. These settings are essential for configuring and deploying the website to AWS S3 using the CI/CD pipeline.

1. Environment Variables
Environment variables are used to store sensitive information (such as AWS credentials) securely in GitHub secrets, and they are referenced during the CI/CD process.

AWS Settings
AWS_S3_BUCKET

Description: The name of the S3 bucket used to store and host the website.

Example: my-website-bucket

Usage: This variable is used in the CI/CD pipeline to specify which S3 bucket to deploy the website files to.

AWS_REGION

Description: The AWS region where your S3 bucket is located.

Example: us-east-1

Usage: This variable is used in the CI/CD pipeline to specify the region for deploying the S3 bucket. AWS regions can vary (e.g., us-west-2, eu-central-1), so be sure to select the correct one.

AWS_ACCESS_KEY_ID

Description: The AWS Access Key ID used for accessing your AWS resources (like S3).

Example: AKIAIOSFODNN7EXAMPLE

Usage: This variable is stored securely in GitHub Secrets and is used in the GitHub Actions pipeline to authenticate AWS operations. It must be kept secret and should never be exposed publicly.

AWS_SECRET_ACCESS_KEY

Description: The AWS Secret Access Key corresponding to the AWS Access Key ID.

Example: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

Usage: Like the Access Key ID, this secret key is used to authenticate AWS operations in the GitHub Actions pipeline. It should also be stored securely and never exposed publicly.

2. GitHub Actions Secrets
These secrets are used to store sensitive data such as API keys, access tokens, and authentication credentials, ensuring that they are securely accessed during the CI/CD pipeline process.

GitHub Actions Secrets:
AWS_S3_BUCKET: Set this secret in the GitHub repository's settings to define the name of the S3 bucket.

AWS_ACCESS_KEY_ID: Set this secret in the GitHub repository's settings to provide AWS access.

AWS_SECRET_ACCESS_KEY: Set this secret in the GitHub repository's settings for AWS access.

3. Configuration Files
These configuration files are crucial for setting up the CI/CD pipeline and ensuring smooth deployment.

GitHub Actions Workflow (.github/workflows/ci-cd.yml)
This file defines the CI/CD pipeline steps, including testing, building, and deploying the website to AWS S3. The workflow uses the environment variables listed above to authenticate and deploy the site.

Example:


yaml

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
          AWS_REGION: 'us-east-1'


          
AWS S3 Bucket Configuration
Create S3 Bucket:
The S3 bucket must be created manually via the AWS console or AWS CLI.

Name the bucket uniquely (e.g., my-website-bucket).

Enable Static Website Hosting in the bucket settings.

Set the index.html as the default page.

Set Bucket Permissions:

Grant public access to the files stored in the S3 bucket.

Set the correct bucket policy to ensure your files can be accessed publicly.

Example bucket policy:




json

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-website-bucket/*"
    }
  ]
}



4. Additional Commands
Here are some commands used to set up, deploy, and manage your website:

To Install Dependencies Locally:
For local development, you can install dependencies using npm:

bash
npm install


This will install all required dependencies listed in the package.json file.

To Run Tests Locally:
You can run unit tests on your local environment before committing changes:


bash
npm run test


To Build the Project Locally:
If you need to manually build the website (especially if you’re using bundlers or preprocessors), you can run:



bash
npm run build


This will generate the static files in the dist/ directory, ready to be deployed to S3.

To Deploy to AWS S3 Locally (Without CI/CD Pipeline):
If you want to manually upload your files to the S3 bucket (bypassing the CI/CD pipeline), you can use the AWS CLI:

Install the AWS CLI if you don't have it already.

Configure it with your AWS credentials:



bash
aws configure


Upload the files to S3:


bash

aws s3 sync ./dist s3://your-bucket-name --acl public-read
5. Common Errors and Troubleshooting
Here are some potential issues you might encounter during setup and deployment:

Access Denied:

This error can occur if the AWS_ACCESS_KEY_ID or AWS_SECRET_ACCESS_KEY is incorrect or missing.

Ensure that these credentials are correctly set as GitHub secrets and have the necessary IAM permissions.

S3 Bucket Permissions:

If the S3 bucket is not configured correctly to allow public access, users might not be able to view the website. Ensure that the bucket policy allows s3:GetObject on the bucket and that public access is enabled.

GitHub Actions Failing:

Check the logs in the GitHub Actions tab for errors. If there’s an issue with the workflow, it might be due to missing or incorrect environment variables.

Conclusion
This reference document provides an overview of the technical specifications and configurations required for deploying the website to AWS S3 and managing the CI/CD pipeline. By properly setting up these environment variables and configuration files, you ensure secure, efficient deployment of your website.

