📚 Library Management API A RESTful 
API for managing a library system. This API allows you to manage books, users, and loans with full CRUD operations. It is built using Node.js, Express, Sequelize, and MySQL.


💡Features CRUD operations for: Books, Users, Loans Relational database using MySQL with Sequelize ORM. Follows the MVC pattern for clean and scalable code. API endpoints tested using Thunder Client. Technologies Used Node.js Express.js Sequelize (ORM) MySQL Thunder Client (for API testing)


🔧 Installation and Setup Prerequisites - Make sure you have the following installed on your system:

Node.js (v16 or higher) 

npm (comes with Node.js) 

MySQL


🚀 Steps to Run Locally Clone the Repository

Clone the Repository: git clone https://github.com/your-username/your-repository-name.git 

cd your-repository-name

Install Dependencies: npm install 

npx nodemon app.js



Set Up the Database:

In MySQL Workbench open a new Local instance

Open a new query tab and run the following command

create database library_tp2


Inside the .env file in the root directory change the password, with your MySQL root password.


With this you'll only need to tidy up the DB. Firstly you'll have to create the database, then open the app.js for the first time, and done this the database will be ready to receive inserts. Follow the next script to create and make inserts if you wanna test the API.



CREATE DATABASE Library_TP2;


--Una vez creada la base de datos, ejecutaremos app.js

--npx nodemon app.js

--Listo esto, ya estaran creadas las tablas, y ahora podremos agregar los datos a la BD.


USE Library_TP2;


INSERT INTO Users (name, email, registrationDate, password, role) VALUES

('John Doe', 'john.doe@example.com', '2023-11-01', 'password123', 'user'),

('Jane Smith', 'jane.smith@example.com', '2023-11-02', 'password456', 'user'),

('Admin User', 'admin@example.com', '2023-11-01', 'admin123', 'admin'),

('Alice Brown', 'alice.brown@example.com', '2023-11-03', 'password789', 'user'),

('Bob Johnson', 'bob.johnson@example.com', '2023-11-04', 'password101', 'user');



INSERT INTO Books (title, author, year, genre) VALUES

('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Fiction'),

('To Kill a Mockingbird', 'Harper Lee', 1960, 'Classic'),

('1984', 'George Orwell', 1949, 'Dystopian'),

('Moby Dick', 'Herman Melville', 1851, 'Adventure'),

('Pride and Prejudice', 'Jane Austen', 1813, 'Romance');



INSERT INTO Loans (userId, bookId, loanDate, returnDate) VALUES
(1, 1, '2023-11-10', NULL), -- John Doe prestó "The Great Gatsby"
(2, 2, '2023-11-12', NULL), -- Jane Smith prestó "To Kill a Mockingbird"
(4, 3, '2023-11-15', NULL), -- Alice Brown prestó "1984"
(5, 4, '2023-11-16', '2023-11-20'), -- Bob Johnson prestó "Moby Dick" y lo devolvió
(1, 5, '2023-11-18', NULL); -- John Doe prestó "Pride and Prejudice"



======================================================


Testing the API


Use Thunder Client or any API testing tool to test the endpoints. For testing you'll first need to login with an admin user, and then put the token in the Autenthication header. More information in the TestApi.txt file


GET /api/books - List all books 

GET /api/books/:id - Get a book by ID 

POST /api/books - Add a new book 

PUT /api/books/:id - Update a book by ID 

DELETE /api/books/:id - Delete a book by ID 

Users Method Endpoint Description

GET /api/users - List all users 

GET /api/users/:id - Get a user by ID 

POST /api/users - Add a new user 

PUT /api/users/:id - Update a user by ID 

DELETE /api/users/:id - Delete a user by ID 

Loans Method Endpoint Description 

GET /api/loans - List all loans 

GET /api/loans/:id - Get a loan by ID 

POST /api/loans - Register a new loan 

PUT /api/loans/:id - Update a loan (e.g., return a book) 

DELETE /api/loans/:id - Delete a loan



Contributors: Francisco Haro, Benjamin Francisco, Juan Lamnek
