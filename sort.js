// Sort numbers in either assending or descending order
// as .sort() is unreliable

function sortNumber(a,b) {
    return a - b;
}

var numArray = [140000, 104, 99];
numArray.sort(sortNumber);
alert(numArray.join(","));

//ES6
numArray.sort((a, b) => a - b); // For ascending sort
numArray.sort((a, b) => b - a); // For descending sort