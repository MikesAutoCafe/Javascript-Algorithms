function sumSquareDifference(n) {
  let sq1 = 0;
  let sq2 = 0;
  let result;
  for (let i = 1; i <= n; i++){
    sq1 += i * i;
    sq2 += i;

  }

  sq2 *= sq2;
  result = sq2 - sq1;
  return result;
}

sumSquareDifference(100);
