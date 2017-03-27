function allCaps() {
  var x = document.getElementById("form1");
  var input = x.elements["name"].value.split('');
  var output = [];
  for (var i = 0; i < input.length; i++) {
    var letter = input[i].toLowerCase();
    if  (!(letter === 'y' ||
         letter === 'i' ||
         letter === 'o' ||
         letter === 'e' ||
         letter === 'u' ||
         letter === 'a' )) {
      output.push(letter);
    }
  }
  var stringedOutput = output.join('');
  document.getElementById("demo").innerHTML=stringedOutput;
}