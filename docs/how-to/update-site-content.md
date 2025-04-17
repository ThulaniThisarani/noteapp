Title: How to Update Website Text or Images
Objective
This guide walks you through the process of updating content (text or images) on the website and deploying the changes to the live site hosted on AWS S3 using the CI/CD pipeline.

Steps:
1. Clone the Repository (If Not Already Done)
If you haven’t already cloned the repository, start by cloning it to your local machine.

bash
git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name
2. Open the index.html or style.css File
Navigate to the index.html file (or the appropriate HTML file for your page content) or the style.css file if you need to update styling.

For text/content changes: Open index.html.

For styling/image changes: Open style.css or relevant CSS file.

You can open these files in any text editor (e.g., VSCode, Sublime Text, or even a code editor within your IDE).

3. Make Edits Locally
Update the content as needed. Here are some common tasks:

Text Change: Update the content inside any <p>, <h1>, or <div> tags.

Example:

html
<h1>Welcome to Our Website!</h1>
<!-- Change the title -->
Image Change: Replace an image by changing the src attribute of the <img> tag to the path of your new image.

Example:

html

<img src="images/old-image.jpg" alt="old image">
<!-- Change o -->
<img src="images/new-image.jpg" alt="new image">
CSS Update: If you're working on a style or layout change, open style.css and modify the relevant class or ID rules.

Example:

css
.header {
    background-color: blue;  /* Change background color */
}
4. Test Changes Locally
Before pushing your changes to GitHub, it’s good practice to view the updates on your local environment. Open the index.html file in your browser to see if the content or images appear as expected.

5. Commit Your Changes
Once you’re satisfied with your updates, commit your changes with a conventional commit message that clearly describes what was changed.

Run the following commands to commit your changes:

bash

git add .
git commit -m "fix: update homepage text and change logo image"
This message follows the Conventional Commits convention, where fix: indicates a non-breaking change, while providing a clear description of the change.

6. Push to the main Branch
Push your changes to the main branch to trigger the CI/CD pipeline. This pipeline will automatically test, build, and deploy the website to AWS S3.

bash

git push origin main
7. Verify the Deployment
After pushing the changes, the CI/CD pipeline will automatically run, deploy the new content to S3, and update the live website.

You can verify that the updates were deployed successfully by visiting your live website URL, which is usually something like http://your-bucket-name.s3-website-us-east-1.amazonaws.com.

Troubleshooting
If your changes are not reflecting on the live site:

Check the pipeline logs: Go to your GitHub Actions tab and review the build and deployment logs to see if there was any error during the process.

Clear your browser cache: Sometimes, the browser may cache the old version of your website. Try clearing the cache or opening the site in an incognito window to see the updated version.

Verify file paths: Ensure that images and other assets are correctly linked and uploaded to S3.

Additional Tips
If you need to rollback changes, you can simply revert to a previous commit using:

bash

git revert <commit-hash>
Static content (like images, fonts) should be stored in a separate assets or images directory for better organization.

Conclusion
By following this guide, you’ve learned how to update your website content locally, test the changes, and deploy them automatically to AWS S3 using the CI/CD pipeline. This process ensures that any updates you make are deployed efficiently and without downtime.
