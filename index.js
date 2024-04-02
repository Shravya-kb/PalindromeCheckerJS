//Program to check whether a given string is a palindrome or not removing any non alphanumeric characters 
const  palindrome = (str) => {
  str = str.replace(/\W|_/g, "").toLowerCase();
  console.log(str);
  let reverseString = str.split("").reverse().join("");
  console.log(reverseString);
  if(str === reverseString){
    console.log(`${str} is a palindrome`)
  } else {
    console.log(`${str} is not a palindrome`);
  }
}
palindrome("MALAYALAM");
