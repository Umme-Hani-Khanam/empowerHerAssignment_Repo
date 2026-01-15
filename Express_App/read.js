const fs = require("fs");

function readFileData(callback) {
  fs.readFile("Data.txt", "utf8", (err, data) => {
    if (err) {
      callback("Error reading file");
    } else {
      callback(data);
    }
  });
}

module.exports = readFileData;
