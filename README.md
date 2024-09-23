# BA-Angular-Project  
**Bachelor Thesis Angular Project - Web Performance Testing**

## Project Description  
This project demonstrates web performance testing and consists of four main components:

1. **Database Component**  
   This component allows users to load datasets, add 100 datasets, delete 100 datasets, delete all datasets, and restore datasets using a CSV file. The datasets are displayed in a table.

2. **API Component**  
   In this component, the open-source API "Deck of Cards" has been integrated, enabling users to create a deck of cards and draw a specific number of cards, which are then visually displayed.

3. **Chart Component**  
   This component integrates the Chart.js library to generate a pie chart that displays the age distribution of the datasets in the database.

4. **Mock Data Component**  
   This component loads mock data in JSON format, which is displayed in a table.

## Getting Started  
To run the project locally, follow these steps:

1. In the root folder of the project, first install the dependencies by running:
   `npm install`

2. In the root folder of the project, enter the command `ng serve` or `ng serve -o` to start the build process.  
   Once the build is successful, the application can be accessed via `http://localhost:4200/` in the browser.

3. Additionally, the backend server needs to be running.  
   Navigate to the backend folder using the following command:  
   `cd .\src\myBackend\`

   Start the server with the following command:
   `node server.js`

