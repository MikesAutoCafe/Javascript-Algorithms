//splice and slice 
//splice and slice 
function frankenSplice(arr1, arr2, n) {
 let arr3 = [];
 let arr4 = [];
 
 for (let i = 0 ; i < arr1.length; i++){
   arr3.push(arr1[i]);
 }
  arr3.splice(0,0, arr2.slice(0,n));
  arr3.splice(arr3.length,0, arr2.slice(n,arr2.length));
for(let i = 0; i < arr3.length; i++)
{
    arr4 = arr4.concat(arr3[i]);

}
 return arr4;

}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)

//https://stackoverflow.com/questions/14824283/convert-a-2d-javascript-array-to-a-1d-array