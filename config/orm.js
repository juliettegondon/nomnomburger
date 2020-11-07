//import connection
var connection = require("./connection.js");


//------------------------------
// Helper function for SQL syntax - from cat example, but worked through line by line on my own. 
function toSQLformat (num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }
  // this function will convert input to a mySQL friendly format
  function objToSql(ob) {
    var arr = [];
    // convert and push key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Big Mac => 'Big Mac')
        // e.g. {name: 'Big Mac} => ["name='Big Mac'"]
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
return arr.toString();
}
//------------------------------

//methods that will execute the necessary MySQL commands in the controllers. 
//these are the methods you will need to use in order to retrieve and store data in your database.
//`selectAll()` 
//`insertOne()`
//`updateOne()


var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
          });
    },
    //------------------------------
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

       queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += toSQLformat(vals.length);
        queryString += ") ";
    
        console.log(queryString); 


        connection.query(queryString, vals, function(err, res) {
            if (err) throw err; 
            cb(res);
          });
        },

    //------------------------------
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
    };

//exporting orm object for the burger.js model
module.exports = orm;