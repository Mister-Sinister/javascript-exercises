const palindromes = function (string) {
  string = string.toLowerCase();

  let char_array = string
    .split("")
    .filter((char) => "abcdefghijklmnopqrstuvwxy0123456789".includes(char));

  let cleanedString = char_array.join();
  let reversedString = char_array.reverse().join();

  if (reversedString === cleanedString) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
