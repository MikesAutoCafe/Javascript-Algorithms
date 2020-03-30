function smallestMult(n) {
  var number = n;
  let bool = false;
  let vool;
  let add = 0;
  while(bool == false){
    for(let i = 1; i <= n; i++){
        add += number % i;  
    }
    if (add > 0 ){
    number++;
    add = 0;
    }
    else{
      bool = true;
      break;
    }

  }
   
  return number;
}
smallestMult(13);