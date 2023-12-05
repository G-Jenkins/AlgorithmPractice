/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  if (string.length === 0) {
    return undefined;
  }


  let splitStr = string.split('');

  if (splitStr.length === 1) {
    return splitStr[0]
  }

  for (let i = 0; i <  splitStr.length; i++) {
    let current = splitStr[i];
    let prev = i > 0 ? splitStr[i -1]:null;
    let next = i < splitStr.length ? splitStr[i + 1]:null

    if (current !== prev && current !== next) {
      return current
    }
  }

  return null;
 }


console.log(firstNonRepeatedCharacter('112233'))