# Eat Da Burger
you know you want to! 

LINK HERE
## Node Express Handlebars ORM Application

This app is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Users can input the names of burgers they want to eat. Whenever a user submits a burger's name, this app will display the burger on the left side of the page -- waiting to be devoured. Once devoured, it appears on the right. All burgers are stored in the mySQL database! 






  ## Installation:

1. Clone this repo into your local machine
2. run schema.sql in mySQL workbench
3. npm install - install for inquirer, console.table, and mySql connection
4. in the createConnection function use your own mySql pw
5. node server.js will start the application in the command line, and on a local host. 

  ## License:
ISC

  

  ## Contributing:
  n/a

  ## Tests:
  n/a

  ## Usage:
run 'node server.js' in your terminal annd follow CLI prompts

The schema.js and seeds.js files house the database, connection.js sets up the connection, and server.js runs all dependencies. 

orm.js works with three different methods to query the burgers_database 
     * `selectAll()` - GET request, get burgers from db
     * `insertOne()` - POST request, adds burgers to db
     * `updateOne()` - PUT request, updates the boolean of burgersto devoured


  ## Questions: 

If you have any questions, you can contact the creator of this repo here: [juliettegondon@gmail.com](mailto:juliettegondon@gmail.com)
GitHub: https://github.com/juliettegondon