let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (data === "\u0003") {
    process.exit();
  }
  if (data === "w") {
    //console.log("Move: up");
    connection.write("Move: up");
  }
  if (data === "a") {
    console.log("Move: left");
    connection.write("Move: left");
  }
  if (data === "s") {
    console.log("Move: down");
    connection.write("Move: down");
  }
  if (data === "d") {
    console.log("Move: right");
    connection.write("Move: right");
  }

  if (data === "e") {
    console.log("SPEED");
    connection.write("Say: ACTIVATING SPEED");
  }

  if (data === "r") {
    console.log("Returning to snail's pace");
    connection.write("Say: Returning to snail's pace");
  }

  if (data === "y") {
    console.log("Yuli");
    connection.write("Say: YULI, MY ARCH NEMESIS");
  }

  if (data === "u") {
    console.log("Edwin");
    connection.write("Say: EDWIN, MY ARCH NEMESIS");
  }

  if (data === "i") {
    console.log("Curtis");
    connection.write("Say: CURTIS, MY ARCH NEMESIS");
  }
d
};

module.exports = {
  setupInput,
};
