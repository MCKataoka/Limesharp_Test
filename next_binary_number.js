function next_binary_number(binary) {
  var response = (parseInt(binary.join(''), 2) + 1).toString(2).split('');
  for (var i = 0; i < response.length; i++) {
    response[i] = parseInt(response[i]);
  }
  return response;
}
