function characterPositioning(sentence) {
  //finds letters only and splits sentence to make it ready for the loop to push into object.
  var sentence = sentence.replace(/\s+/g, '').split('');
  var positioning = {};
  for (var i = 0; i < sentence.length; i++) {
    var index = [];
    index += sentence[i];
    if (positioning[sentence[i]]) {
      positioning[sentence[i]]
    } else {
      positioning[sentence[i]] = 3;
    }

  } return positioning;
}

console.log(characterPositioning("This is a random sentence"));