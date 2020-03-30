//falsy bouncer

function bouncer(arr) {
  for (let i = 0; i < arr.length ; i++){
    if(arr[i] === false ||  arr[i] === null ||  arr[i] === 0||  
     arr[i] === "" || arr[i] === undefined || arr[i] === NaN ){
    arr.splice(i,2);
    i--;
    }
  }
  return arr;
}

bouncer([false, null, 0, NaN, undefined, ""]);

