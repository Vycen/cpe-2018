const fs = require("fs");

fs.readFile(process.argv[2], (err, content) => {
  if (err) {
     console.error(err.message);
     return;
  }

  console.log(content.toString().split(/\r?\n/).length - 1);
});
