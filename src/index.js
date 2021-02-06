module.exports = function check(str, bracketsConfig) {
  var isNormal = true;
  var newstr = str;
  newstr = newstr.split("");
  console.log(newstr);
  for (var i = 0; i < newstr.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (newstr[i] == bracketsConfig[j][1] && newstr[i-1] == bracketsConfig[j][0]){
        var removed = newstr.splice(i-1, 2);
        i -= 2;
      }
    }
  }
  console.log(newstr);
  if (newstr.length == 0) {
    return isNormal;
  } else {
    return !isNormal;
  }
}
