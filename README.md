This project is a simple contact form that collects user information (name, email, phone, and message) and stores it in a MySQL database. It's designed for a web development startup site called DevForge, where potential clients or visitors can send inquiries directly through the site.

Features
Collects and stores user details including name, email, phone number, and message.
Stores form submissions in a MySQL database for easy management and future reference.
Displays success or error messages based on the form submission status.
Technologies Used
PHP - Server-side scripting language to handle form processing.
MySQL - Database to store contact form submissions.
HTML/CSS - Front-end layout and styling.
XAMPP (or LAMP/WAMP) - Local server environment to host the project locally.
Prerequisites
XAMPP (or any LAMP/WAMP stack) installed on your computer.
Basic knowledge of PHP and MySQL.
MySQL server running on localhost with a database and table set up.
Project Setup
Step 1: Set Up the Database
Open phpMyAdmin in your local environment (usually at http://localhost/phpmyadmin).

Create a new database called devforge.

Create a contacts table in the devforge database with the following structure:

sql
Copy code
CREATE TABLE contacts (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL
);
Step 2: Configure PHP Code
Save the provided PHP code in a file named contact.php.

Ensure that your MySQL credentials in contact.php match your setup. For example:

php
Copy code
$servername = "localhost";
$username = "root";
$password = "";  // Leave blank for default XAMPP configuration
$dbname = "devforge";
Step 3: Add Contact Form to HTML
Insert the contact form HTML code into your website (typically in a contact section or a dedicated contact page).

Ensure the form action attribute points to contact.php, like so:

html
Copy code
<form action="contact.php" method="POST">
Step 4: Start XAMPP and Access the Project
Start the Apache and MySQL servers in XAMPP.
Place the project files in the XAMPP htdocs folder (usually found in C:\xampp\htdocs\ on Windows).
Open your browser and navigate to http://localhost/your_project_folder/ to access your site.
Usage
Navigate to the contact page on your site.
Fill in the form fields (Name, Email, Phone, and Message).
Click "SEND" to submit the form.
If the submission is successful, a success message will be displayed. Otherwise, an error message will provide feedback.
Troubleshooting
Common Errors
"Connection failed": If you see a database connection error, double-check your MySQL credentials in contact.php.

HTTP ERROR 405: This typically indicates an issue with the request method. Ensure your form's method is set to POST and that the form submission points to contact.php.

Blank page: Enable error reporting in PHP to see potential issues. Add the following to the top of contact.php:

php
Copy code
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
Data not being inserted: Confirm that the contacts table exists and has the correct structure. You can also check for errors in the SQL query by outputting $conn->error after the query() call.

Testing the Form
To ensure everything is working correctly:

Try submitting the form with different inputs.
Verify that records are being added to the contacts table in your devforge database.
Check that success and error messages are displaying properly.