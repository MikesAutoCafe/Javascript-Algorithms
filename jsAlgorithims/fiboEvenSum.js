function fiboEvenSum(n) {
  var fibb = [1];
  for (let i = 1 ; i < n ; i++)
  if (i == 1){
    fibb[i] = 2
  }
  else
  {
       fibb[i] = (fibb[i - 1] + fibb[i - 2]);
  }

  var evenFibb = 0;

  for (let i = 0; i < n ; i++)
  {
    if (fibb[i] % 2 == 0) {
      evenFibb += fibb[i]
    }
  }


  return evenFibb;
}


fiboEvenSum(10);
