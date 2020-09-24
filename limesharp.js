function repeat(array) {
  var responseArray = [];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < array.length; j++) {
      responseArray.push(array[j]);
    }
  }

  return responseArray;
}

console.log(repeat([1, 2, 3]));

function reformat(str) {
  str = str.toLowerCase();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  str = str.replace(/[aeiou]/gi, '');
  return str;
}

console.log(reformat('liMeSHArp DeveLoper TEST'));

function next_binary_number(binary) {
  var response = (parseInt(binary.join(''), 2) + 1).toString(2).split('');
  for (var i = 0; i < response.length; i++) {
    response[i] = parseInt(response[i]);
  }
  return response;
}

console.log(next_binary_number([1, 1, 0]));
