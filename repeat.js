function repeat(array) {
  var responseArray = [];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < array.length; j++) {
      responseArray.push(array[j]);
    }
  }

  return responseArray;
}
