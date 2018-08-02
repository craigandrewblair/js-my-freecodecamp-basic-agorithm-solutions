// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    arr = arr.filter(function(elem){
        return elem !== false && elem !== '' && elem !== 0 && elem !== null && elem !== undefined && !Number.isNaN(elem);
    });
    return arr;
  }
  
  //console.log(bouncer([7, "ate", "", false, 9]));
  //console.log(bouncer(["a", "b", "c"])) //should return ["a", "b", "c"].
  //console.log(bouncer([false, null, 0, NaN, undefined, ""])) //should return [].
  //console.log(bouncer([1, null, NaN, 2, undefined]))//should return [1, 2].
