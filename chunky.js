// Write a function that splits an array 
// (first argument) into groups the length of size 
// (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let chunkyArr = [];
    let numOfArrs = Math.ceil(arr.length / size);
    let arrIndex = 0; // store current arr index
    let currentArr = 0; // store current array index in chunkyArr
    console.log(numOfArrs);
    //set chunk arrays
    for (let k = 0; k < numOfArrs; k++) {
        chunkyArr.push([]);
    }
    while(arrIndex < arr.length ){
        for (let j = 0; j < size; j++) {
            if(arr[arrIndex] === undefined){
                break;
            }
            chunkyArr[currentArr].push(arr[arrIndex]);
            arrIndex += 1;
        }
        currentArr += 1;     
        console.log(arrIndex);
    }
    console.log(chunkyArr);
    return chunkyArr;
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);
//chunkArrayInGroups(["a", "b", "c", "d"], 2) //should return [["a", "b"], ["c", "d"]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) //should return [[0, 1, 2], [3, 4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) //should return [[0, 1], [2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) //should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) //should return [[0, 1, 2], [3, 4, 5], [6]].