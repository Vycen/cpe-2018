var fs = require('fs');
var path = require('path');

function ex05(dirPath, extFile) {

	fs.readdir(dirPath, function(err, data) {
		data.forEach(function (fileName) {
			if (!extFile || path.extname(fileName) === extFile) {
				console.log(fileName);
			}
		});
	});

}

ex05(process.argv[2], process.argv[3]);
