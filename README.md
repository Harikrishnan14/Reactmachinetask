# Reactmachinetask
# Initial Setup:

1. **Install Node.js :** Node.js is an open-source, cross-platform JavaScript runtime environment. You can download Node.js from the official website at https://nodejs.org/en/download/ or use your system's package manager.

   Check Node.js and npm Installation:
   Open a terminal ( or command prompt on Windows ) and run the following command to ensure Node.js is installed correctly:

   ### `node -v`

   [ NOTE : npm comes with Node.js by default, you don't have to install it separately ]

2. **Install Dependencies :**
   1. Open the terminal ( or command prompt on Windows ) ( or if you are using VS Code, you can use its terminal ) and run the following command to navigate to the Frontend ( Client side ) of the application :
      ### `cd .\client\`
      Then, 
      ### `npm i`
      This will install all the dependencies needed to run the Frontend of the application

   2. Open another terminal ( or command prompt on Windows ) ( or if you are using VS Code, you can use its terminal ) and run the following command to navigate to the Backend ( Server side ) of the application :
      ### `cd .\Server\`
      Then, 
      ### `npm i`
      This will install all the dependencies needed to run the Backend of the application

# Starting the Application:

1. Open the terminal which you used to install the dependencies for the Frontend and run the following command to start Frontend of the application :
   ### `npm start`
2. Open the other terminal which you used to install the dependencies for the Backend and run the following command to start Frontend of the application :
   ### `node .\server.js`
   [ OR, You can use `nodemon .\server.js`, if nodemon is already installed on your system ]
   
3. After these, Go to 'http://localhost:3000'

# Packages Used:

1. **Axios :** Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data. It offers different ways of making requests such as GET , POST , PUT/PATCH , and DELETE.
2. **Chart.js :** Chart.js is a free JavaScript library for making HTML-based charts. It is one of the simplest visualization libraries for JavaScript, and comes with the following built-in chart types: Scatter Plot. Line Chart.
3. **react-chartjs-2 :** React components for Chart.js, the most popular charting library. It offers a variety of chart types to select from. These include Bar, Radial, Pie, etc.