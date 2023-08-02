/*

For the activity, snek game, 🐍
your server credentials are:
Web view: http://165.227.47.243:8081/
IP for client : 165.227.47.243
Port for client : 50541


Go on your browser to the web view
when coding, in your file use the IP for client and Port for client in your connection string 🙂


*/

const { IP, PORT } = require("./constants");
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game");
  });

  conn.on("connect", () => {
    conn.write("Name: MAX");
  });

  /*
  conn.on("connect", () => {
    conn.write("Move: up");
  }),

  */

  conn.on("data", (data) => {
    console.log(data.toString());
    conn.end();
  });

  return conn;
};

module.exports = {
  connect,
};
