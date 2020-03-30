function truncateString(str, num) {

   str = str.split('');
   if (num < str.length){
   str.length = num;
   str.push('.')
   str.push('.')
   str.push('.')
   }
   str = str.join('');
  // str += '...';
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) 