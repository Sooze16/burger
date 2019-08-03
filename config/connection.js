var mysql = require("mysql")

if (process.env.JAWSDB_URL) {
    console.log('using Jaws');

    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    console.log('using local');

    connection = mysql.createConnection({
        host: "localhost",
        user: "Sooze16",
        password: "Gidget@Kramer",
        database: "burger_db"
    });

}


// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;