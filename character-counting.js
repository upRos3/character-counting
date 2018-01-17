function characterCounting(sentence) {
  //finds letters only and splits sentence to make it ready for the loop to push into object.
  var sentence = sentence.replace(/[^A-z]/g, '').toLowerCase().split('').sort();
  var count = {};
  for (var i = 0; i < sentence.length; i++) {
    if (count[sentence[i]]) {
      count[sentence[i]] += 1;
    } else {
      count[sentence[i]] = 1;
    }

  } return count;
}

console.log(characterCounting("...!!!$$$Lighthouse IN the HouSe EEEEA827381bsbdjfsabasdEEEEeeee"));