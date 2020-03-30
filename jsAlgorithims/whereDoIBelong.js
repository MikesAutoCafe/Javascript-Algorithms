//Where do I belong 

function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}

function getIndexToIns(arr, num) {

arr = nonMutatingSort(arr);
  let index = 0;
  for (let i = 0; i < arr.length; i++){
    if (num == arr[i]){
      index = i;
    }
    else if (num > arr[i] && num <= arr[i+1]){
      index = i + 1;
    }

    else if(num > arr[i] && i == arr.length -1){
      index = arr.length;
    }
  }
  return index;
}

getIndexToIns([20, 3, 3, 5], 5);