function toto(array, search, callback) {
  for (var elm of array){
    console.log(elm);
    if (elm === search) {
      console.log('found !');
      callback(elm);
    }
  }
}

²toto(process.argv, 'tata', result => {
    console.log(result);
});
