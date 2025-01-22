Amazon Clone

This project is an Amazon clone web application, built with React, Firebase for authentication, and Stripe for payment processing. It includes essential e-commerce functionalities such as user authentication, order management, and payment processing.

Features
User Authentication: Secure sign-up and login using Firebase Authentication.

Payment Processing: Stripe integration for handling secure payments.

Order Management: Users can place and manage orders efficiently.

Product Listing: Display products with detailed descriptions and images.

Responsive Design: Seamless experience across all devices.

Technologies Used
Front-End: React, HTML, CSS, JavaScript

Back-End: Firebase (Authentication, Firestore Database)

Payment Processing: Stripe

Tools: Git, npm, Webpack, Babel

Installation
Clone the repository:

bash
git clone https://github.com/tekluabayneh/my_Amazon.git
cd amazon-clone
Install dependencies:

bash
npm install
Set up Firebase:

Create a Firebase project in the Firebase console.

Enable Authentication and Firestore Database.

Replace the Firebase configuration in src/firebase.js with your project's credentials.

Set up Stripe:

Create a Stripe account and get your API keys.

Replace the Stripe API keys in the appropriate files.

Run the application:

bash
npm start

Usage
Sign Up/In: Users can sign up or log in using their email and password.

Browse Products: Users can browse through a list of products.

Add to Cart: Users can add products to their cart.

Checkout: Users can proceed to checkout and make payments using Stripe.

Order History: Users can view their past orders.

Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

License
This project is licensed under the MIT License.
