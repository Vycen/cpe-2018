var sum = 0;

process.argv.forEach(funtion(elm) {
	if (!Number.isNaN(Number(elm))) {
		sum += Number(elm);
	}
})
	console.log(sum);

	for (var i of process.argv) {
		// var elm = process.argv[i];
		var elm = i;

		if (!Number.isNaN(Number(elm))) {
			sum += Number(elm);
		}
	}
