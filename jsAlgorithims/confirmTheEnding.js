//confirm ending 

function confirmEnding(str, target) {
  let match = str.slice(-1 * target.length);

  if (match === target){
    return true
  }
  else{
  return false;
  }
}



confirmEnding("Bastian", "n");
