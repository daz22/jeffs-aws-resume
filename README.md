# jeffs-aws-resume
My Cloud Journey project! Creating a resume on AWS!

This project has a few prerequisites. 

1. Have an active AWS account
2. Have an active GitHub account.

1. Getting your website established.
  A. I used ChatGPT to develop an index.html style.css and .js to get my primary site up and running. The files are located in the repo. Modify them to suit your resume needs.
  B. After modifying the files, head to your AWS console and select S3 Bucket. (Please make sure you are in the right region. Take note of the region)
  C. Give your S3 bucket a name (I used jeffsawsresume.com) and scroll down to the section "Block Public Access settings for this bucket." Uncheck the "Block all public access" and make sure you check the "
I acknowledge that the current settings might result in this bucket and the objects within becoming public." section. Once that is completed, you will create your S3 storage bucket.
  D. Once your bucket is created, click Buckets at the top of the page, then click your new bucket (jeffsawsresume.com) under General Purpose Buckets, then click Permissions.
  E. You want to create a bucket policy. I've attached the files to the repo. Make sure you modify the Resource section of the Javascript to point to your bucket name.
  F. Once you have completed the bucket policy, click on properties and scroll to the bottom to "Static website hosting." Under this section, you should see a section called "Bucket website endpoint." Click it, and a new webpage should open, displaying your site!

2. Getting a domain name
   A. At the top of the page in the search bar, click and type "Route 53."
   B. Under domains, click Regiester domains, and click the orange "Regiester domains" button.
   C. Under search for a domain, enter the domain name of your choice.
   D. Once you have selected your domain under the search result, click proceed to checkout.
   E. Click Next, fill out the contact information, and submit. You have now registered your domain. 
   F. Once your domain is registered, click the search bar at the top and type Certificate Manager.

3. Setting up a certificate
   A. Click Request a Certificate (Ensure you are in the right region. This should be the same region you started with)
   B. Select "Request a public certificate" and click next.
   C. In the Fully Qualified Domain Name, insert your domain name (i.e., Jeffsawsresume.com)
   D. Scroll to the bottom and click request.
   E. Under the domains section, click Create Records in route 53.
   F. Scroll to the bottom and click Create Records. (This will take some time)
   E. Once your certificate is created, click the search bar at the top and type cloud front.


5. Setting up cloud front
   A. Click on Create Distribution.
   B. Under Origin, select the S3 bucket and the name of your bucket.
   C. Note: "This S3 bucket has static web hosting enabled. If you plan to use this distribution as a website, we recommend using the S3 website endpoint rather than the bucket endpoint." Select "Use website endpoint."
   D. Scroll to see Viewer and select "Redirect HTTP to HTTPS."
   E. Scroll down until you find "Web Application Firewall (WAF)" and select "Do not enable security protections."
   F. Under settings, under Alternative domain (CNAME), add your site's FQDN (e.g., jeffsawsresume.com).
   G. Right below this section, select the custom SSL certificate field and select the certificate we created in step 3.
   H. Scroll down to the default root object and insert "index.html." This will reference your index.html object we uploaded in step one.
   I. Scroll down to the bottom and click Create Distribution. (This will take some time)

6. Publishing to the web
   A. At the top of the webpage, in the search bar, type Route 53.
   B. Click on hosted zones and select your FQDN (i.e., jeffsawsresume.com).
   C. Select your "A" record and click edit record.
   D. Under the "Route traffic to section, type Cloudfront to select "Alias to CloudFront distribution."
   E. in the Choose Distribution section, select the CloudFront distribution we created in Step 5 and click save!
   F. Open up a new browser and type in your FQDN (i.e. jeffsawsresumme.com)
   G. Success: you have now launched your first AWS project! Congrats 

   
   


