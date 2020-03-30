//mutation

function mutation(arr) {
  let word1 = arr[0];
  let word2 = arr[1];
  let pos = 0;
  let count = 0;
  
  word1 = word1.split('');
  for (let i = 0; i < word1.length; i++){
     word1[i] = word1[i].toLowerCase();
  }

  
  word2 = word2.split('');
  for (let i = 0; i < word2.length; i++){
     word2[i] = word2[i].toLowerCase();
  }


while (pos < word2.length){
  
for (let i = 0; i < word1.length; i++){
console.log(`${count} : ${i} : ${word1[i]}`);
if (word1[i] == word2[pos]){
    
    count++;
    break;
  }
}


console.log(count);



if (pos == word2.length - 1){
   if (count == word2.length){
  return true;
}
  else {
   return false;
  }
}





pos++;



} 


}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);