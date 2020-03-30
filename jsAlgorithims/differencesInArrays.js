//Diff Two Arrays

function diffArray(arr1, arr2) {
  let newArr = [];
  let pos = 0;
  let arr3 = [];

  while(pos < arr1.length){
    for (let i = 0 ; i < arr2.length;i++){
      if (arr1[pos] == arr2[i])
      {
        arr1.splice(pos,1);
        arr2.splice(i,1);
         i--;
      }
    }
    pos++;
  }
  
  arr3.push(arr1);
  arr3.push(arr2);

for(var i = 0; i < arr3.length; i++)
{
    newArr = newArr.concat(arr3[i]);
}


  return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
 