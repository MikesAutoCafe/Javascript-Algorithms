// findTheLongestWordInAString


function findLongestWordLength(str) {
  str = str.split(" ");
  var arr = []
  for (let i = 0 ; i < str.length;i++){
    arr[i] = str[i].length;
  }

  let largest = arr[0];


  for (let i = 0 ; i < str.length; i++){
    if(arr[i] > largest){
      largest = arr[i]
    }
  }



  return largest;
  
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
