const filteredLs = require("./exo06_mod.js");

let dirPath = process.argv[2];
let extFile = process.argv[3];

filteredLs(dirPath, extFile, (err, data) => {
	if (err) {
		console.error(err.message);
		return;
  }

	data.forEach(fileName =>
		{
		console.log(fileName);
	});
});
