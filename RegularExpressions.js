//Regular Expressions
// let regex = new RegExp("digital crafts");
// let regex2 = /digital crafts/;
// let someString =
//   "askdfaskjdfjkasdfjksd digital crafts skljflkasjdf zdlkjlkasj asfdljflkjasoiji sjflksja woifoiweulcka";
// let result = regex2.test(someString);
// console.log(result);

// let pattern = /alex/;
// let someString =
//   "slakdfjlksadj asdlkjlks slfjlkas alex laksjciow iafuwijel alex beigerna asdfasf alex lksjflkasjd wioeoiauw lskfajlksfj";
// let result = pattern.test(someString);
// console.log(result);

// let arr = someString.match(pattern);
// let arr2 = someString.replace(pattern, "Plaetzer");
// console.log(arr);
// console.log(arr2);

//Pipe Operator - Matching Multiple Groups with the Pipe
// let pattern = /Batman|Tina Fey/g;
// let str = "Batman is super duper cool dude, but not as cool as Tina Fey";
// let result = str.match(pattern);
// console.log(result);

//() Grouping with Parentheses
// let phonePattern = /(\d\d\d)-\d\d\d-(\d\d\d\d)/;
// let someString =
//   "lksjflkasdjfkl 333-333-2314 sakldfjlksfj aoisdfoisajfiou 234-342-2352 23u238952938";
// let result = someString.match(phonePattern);
// console.log(result);

// let pattern = /Bat(man|mobile|copter|bat)/;
// let str = "Batman lost a wheel while running for the Batmobile";
// let result = str.match(pattern);
// console.log(result);

//Optional Matching with ?
// let pattern = /Bat(wo)?man/g;
// let str = "The Adventures of Batwoman";
// let result = str.match(pattern);
// console.log(result);

// * Matching Zero or More with the Star
// The * (called the star or asterisk) means “match zero or more”
// While * means “match zero or more” the + (or plus) means “match one or more.”

// let pattern = /Bat(wo)*man/g;
// let str1 = "The adventures of Batwoman eats Batman";
// let str2 = "Batwowowowowowowoman";

// let result = str1.match(pattern);
// let result2 = str2.match(pattern);
// console.log(result);
// console.log(result2);

// let pattern = /^a/;

// let str = "a brand new world";
// console.log(pattern.test(str));

// let result = str.match(pattern);
// console.log(result);

// let pattern = /\s/g;
// let str = "This is a very very long day";
// let result = str.replace(pattern, "ogga booga");
// let result2 = str.replace(pattern, "");

// console.log(result);
// console.log(result2);
