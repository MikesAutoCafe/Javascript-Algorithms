function titleCase(str) {
  str = str.split(' ');
  let lower = [];
  let cap = [];
  for (let i = 0 ; i < str.length ; i++)
  {
    cap[i] = str[i][0].toUpperCase();
    lower[i] = str[i].substring(1,str[i].length).toLowerCase();
    str[i] = str[i].replace(str[i].substring(1,str[i].length),lower[i]);
    str[i] = str[i].replace(str[i][0],cap[i]);
  }
  str = str.join(" ");
  return str;
}

titleCase("sHoRt AnD sToUt")