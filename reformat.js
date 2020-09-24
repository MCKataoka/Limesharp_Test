function reformat(str) {
  str = str.toLowerCase();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  str = str.replace(/[aeiou]/gi, '');
  return str;
}
