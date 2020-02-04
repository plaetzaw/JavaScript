// 1. Madlib
// var name = "Alex";
// var subject = "Physical Education";

// console.log(name + "'s favorite subject in school is " + subject);

// 2. Tip Calculator

// function tipAmount(bill, tip) {
//   switch (tip) {
//     case "good":
//       total = bill + bill * 0.2;
//       return total;
//       break;

//     case "fair":
//       total = bill + bill * 0.15;
//       return total;
//       break;

//     case "bad":
//       total = bill + bill * 0.1;
//       return total;
//       break;
//   }
// }
// console.log(tipAmount(100, "good"));

// Tip Calculator 2
// function totalAmount(bill, tip) {
//   switch (tip) {
//     case "good":
//       total = bill * 0.2;
//       return total;
//       break;

//     case "fair":
//       total = bill * 0.15;
//       return total;
//       break;

//     case "bad":
//       total = bill * 0.1;
//       return total;
//       break;
//   }
// }
// console.log(totalAmount(100, "good"));

// 4. Print Numbers

// function printNumbers(start, end) {
//   for (i = 1; i < 11; i++) {
//     console.log(i);
//   }
// }
// printNumbers(1, 10);

// 5. 5 x 5 Box
// function printSquare(size) {
//   for (i = 0; i < size; i++) {
//     console.log("*".repeat(size));
//   }
// }
// printSquare(5);

//6. 6 x 4 Box
// function printBox(length, height) {
//   for (l = 0; l < 6; l++) {
//     console.log("*".repeat(length));
//     for (h = 0; h < 4; h++) console.log("*".repeat(height));
//   }
// }

// printBox(6, 4);

//7. Banner
// function printBanner(text) {
//   var howLong = text.length;
//   console.log("*".repeat(howLong + 4));
//   console.log("* " + text + " *");
//   console.log("*".repeat(howLong + 4));
// }
// printBanner("Welcome to Digital Crafts");

//8. Leetspeak
// function leetspeak(word) {
//   var newword = word
//     .toUpperCase()
//     .replace(/A/gi, "4")
//     .replace(/E/gi, "3")
//     .replace(/I/gi, "6")
//     .replace(/O/gi, "0")
//     .replace(/S/gi, "5")
//     .replace(/T/gi, "7");

//   console.log(newword);
// }
// leetspeak("leet");

//9. Long Vowels
// function longVowels(word) {
//   var longword = word
//     .replace(/aa/gi, "aaaa")
//     .replace(/ee/gi, "eeee")
//     .replace(/ii/gi, "iiii")
//     .replace(/oo/gi, "oooo")
//     .replace(/uu/gi, "uuuu");

//   console.log(longword);
// }
// longVowels("cheese");

//10 Just the Positives

function postiiveNumbers(array) {
  positiveNums = [];
  for (var x = 0; x < Array.length; x++);
  {
    if (array[x] > 0) {
      positivNums.push(x);
    }
  }
  return positiveNums;
}
console.log(postiiveNumbers[(1, -3, 5, -3, -2)]);

// 11. Caesar #1
function caeserCipher(message, shift) {
  message = message.toLowerCase();
  var array = message.split(" ");
  var newArray = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  if (shift > 25) {
    shift = shift % 26;
  }

  for (var i = 0; i < array.length; i++) {
    var word = [];
    for (var j = 0; j < array[i].length; j++) {
      var index = alphabet.indexOf(array[i][j]);
      if (shift + index > 25) {
        var letter = alphabet[index + shift - 26];
      } else {
        var letter = alphabet[index + shift];
      }
      word.push(letter);
    }
    newArray.push(word.join(""));
  }
  return newArray.join(" ");
}

console.log(
  caeserCipher("Genius without education is like silver in the mine", 13)
);
console.log(
  caeserCipher("Genius without education is like silver in the mine", 14)
);

// 12. Caesar #2
function caeserDecipher(message, shift) {
  message = message.toLowerCase();
  var array = message.split(" ");
  var newArray = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  if (shift > 25) {
    shift = shift % 26;
  }

  for (var i = 0; i < array.length; i++) {
    var word = [];
    for (var j = 0; j < array[i].length; j++) {
      var index = alphabet.indexOf(array[i][j]);
      if (shift > index) {
        var letter = alphabet[index - shift + 26];
      } else {
        var letter = alphabet[index - shift];
      }
      word.push(letter);
    }
    newArray.push(word.join(""));
  }
  return newArray.join(" ");
}

console.log(
  caeserDecipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13)
);
console.log(
  caeserDecipher("usbwig kwhvcih sriqohwcb wg zwys gwzjsf wb hvs awbs", 14)
);
