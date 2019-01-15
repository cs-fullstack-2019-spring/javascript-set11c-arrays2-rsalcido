// Exercise 33
//
// Ask the user to enter a word to add to an array. Add the user input into the array.
//     If the user enters a 'q', stop asking them to enter a word.

x=[];

do {
    word= prompt("Enter word to add to the array or enter 'q' to stop.");
    x.push(word)
} while(word !== "q");


for (i=0; i<x.length; i++) {
    console.log("The word is: " + x[i]);
    //console.log("The value of i is: "+i)
}
