function largestOfFour(arr) {
let j = 0;
let pos = 0;
let largest = [];

for (let i = 0 ; i < arr.length ; i++){
 largest = arr[0];

}

 while (j < arr.length){

   largest[pos] = arr[pos][0];

   for(let i = 0; i < arr[pos].length;i++){
    if (arr[pos][i] > largest[pos]){
      largest[pos] = arr[pos][i];
    }
   }
 

j++;
pos++;
}

return largest;
}
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



  //for (let i = 0 ; i < arr.length; i++){

//   let sum = 0;

//   sum += arr[i].length;
    
//   }
// return sum;
// let j = 0;