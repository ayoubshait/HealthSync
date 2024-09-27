HealthSync

HealthSync is a healthcare management system designed to simplify patient management, teleconsultation, and data handling. Built using Node.js, Express.js, and MongoDB, it offers a structured API for managing patients, vital parameters, and medical consultations. HealthSync integrates with MongoDB to store data securely and offers a user-friendly interface to manage teleconsultation services.
Features

    Patient Management: Manage patient records, track vital signs, and update medical details.
    Teleconsultation: Provides functionality for remote consultations with integrated video and chat options.
    Vital Signs Monitoring: Stores and tracks patient vital statistics over time.
    Role-based Access: Provides different access levels for doctors, nurses, and administrators.
    Secure Authentication: JSON Web Token (JWT) based user authentication and session management.
    API Integration: RESTful API services to interact with the backend.
    Scalable: Built on a modular architecture that can be extended with additional services.

Technologies Used

    Node.js: JavaScript runtime for the backend.
    Express.js: Framework for building RESTful APIs.
    MongoDB & Mongoose: Database to store and manage patient and consultation records.
    JWT: For secure user authentication.
    Docker: Containerization for deploying the app across environments.
    HTML, CSS, JavaScript: Frontend views for the teleconsultation platform and dashboard.

Installation
Prerequisites

    Node.js (v14.x or higher)
    MongoDB (running locally or using a cloud service like MongoDB Atlas)
    Docker (optional, for containerization)

Steps to Install Locally

    Clone the repository:

    bash

git clone https://github.com/ayoubshait/HealthSync.git
cd HealthSync

Install dependencies:

bash

npm install

Set up the environment variables: Create a .env file in the root of your project and add the necessary configurations:

bash

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
PORT=3000

Run the application:

bash

    npm start

    The server will run at http://localhost:3000.

Docker Setup (Optional)

You can also run this project using Docker for a more consistent environment setup.

    Build the Docker image:

    bash

docker build -t healthsync .

Run the Docker container:

bash

    docker run -p 3000:3000 healthsync

API Endpoints
Method	Endpoint	Description
GET	/api/patients	Fetch all patients
POST	/api/patients	Add a new patient
GET	/api/vitals	Fetch vital signs data
POST	/api/vitals	Add a new vital sign entry
POST	/api/teleconsultation	Start a new teleconsultation session
Folder Structure

    css/: Contains stylesheets for the application.
    js/: Contains JavaScript files for handling business logic.
        dashboard.js: Manages the dashboard functionalities.
        teleconsultation.js: Handles teleconsultation functionalities.
    models/: Contains Mongoose models for MongoDB collections.
        patientModel.js: Schema for patient data.
        vitalModel.js: Schema for storing patient vitals.
    services/: Contains services for business logic.
        patientService.js: Manages patient-related operations.
        vitalService.js: Manages operations related to vitals.
    views/: Contains frontend HTML files for user interaction.
