function characterPositioning(sentence) {
  var sentence = sentence.split('');
  var positioning = {};
  for (var i = 0; i < sentence.length; i++) {
    var index = [];
    index += sentence[i];
    if (positioning[sentence[i]]) {
      positioning[sentence[i]].push(i);
    } else if (sentence[i] != ' ') {
        positioning[sentence[i]] = [i];
    }

  } return positioning;
}

console.log(characterPositioning("This is a random sentence"));