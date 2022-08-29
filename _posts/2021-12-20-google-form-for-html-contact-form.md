---
title: How to make custom html form interface with Google form as backend
tags: [Google form, HTML]
thumb: https://www.technokids.com/blog/wp-content/uploads/2014/12/google-forms.png

style: 
color: primary
comments: true
description: What if you can host a form without any backend support but with high information security with very few html lines of code at no cost?
---

Google form is one of the powerful tool to collect information, conduct survey and any dumb work you can do with form filling. During this work and learn from home era, almost every organisation has shared at least an online form and everyone of you would have filled at least 5 forms. In your organisation or in your educational institute you would have think about sharing custom forms those are customised with branding, custom URL and funky things. Other than Google Forms there are many e-form tools are available to fulfil such expectations at a considerable cost. You can still use your self served forms to collect data as well. Most of the times you might need to do some backend coding to enable form inputs in your website. What if you can host a form without any backend support but with high information security with very few html lines of code at no cost?

-----

Follow these steps to provide your own frontend interface to your customers and collect the data to a google form response. Let us create a basic event registration form:

1. Create a google form with required fields but without authentication. -I.e. not enabling one response per email account.
   ![](/assets/images/blog/googleForm/b1_2.png)
2. Create your own html form with same fields with any other custom styles.
   ![](/assets/images/blog/googleForm/b1_1.png)
3. Inspect your google form page and search for keyword “entry.” using `ctrl+f` or `cmd+f`.
4. Copy your action url in the form code and give it as the form action='' attribute.
5. You will find a set of hidden input fields as well.
   ![](/assets/images/blog/googleForm/b1_6.png)
6. Copy the name attribute of those input fields and include the same in your custom html form like this.
    ![](/assets/images/blog/googleForm/b1_8.png)
    Now we have worked upto getting the google form's work done.

7. Now if you fill and register ('submit') your custom html form, you will get the responses in your google form responses. 
    ![](/assets/images/blog/googleForm/b1_9.png)
    but, once you submit the page will automaatically opens the google form's after-submission page like this,
8.  Redirecting to another domain is not a positive thing to your brand. So to overcome this issue you have to create a hidden iframe and load that response page (the one you see in the above image) inside that iframe. Add these lines of code in your form page;
    ![](/assets/images/blog/googleForm/b1_10.png)
    Thats it we are done!
    I have added some after-submission properties for the custom html form. So you can provide your customer with a decent custom response after they submit their inputs.
