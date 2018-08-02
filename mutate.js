// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
    let wordArr = [...arr[0]];
    let matchArr = [...arr[1]];
    for(let i in wordArr){
        wordArr[i] = wordArr[i].toLowerCase();
    }
    for(let i in matchArr){
        matchArr[i] = matchArr[i].toLowerCase();
    }
    console.log(matchArr);
    console.log(wordArr);
    let contains = true;
    for(let i = 0; i < matchArr.length; i++){
      if(wordArr.indexOf(matchArr[i]) == -1){
        contains = false;
      }
    }
    console.log(contains);
    return contains;
  }
 
mutation(["hello", "hey"]) //should return false.
// mutation(["hello", "Hello"]) //should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) //should return true.
// mutation(["Mary", "Army"]) //should return true.
// mutation(["Mary", "Aarmy"]) //should return true.
// mutation(["Alien", "line"]) //should return true.
// mutation(["floor", "for"]) //should return true.
// mutation(["hello", "neo"]) //should return false.
// mutation(["voodoo", "no"]) //should return false.
  