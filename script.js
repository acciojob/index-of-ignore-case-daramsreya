function indexOfIgnoreCase(s1, s2) {
  // write your code here
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();
  const s1Length=s1.length;
  const s2Length=s2.length;
  for(let i=0;i<=s1Length-s2Length;i++){
      if(lowerS1.substring(i, i + s2Length) === lowerS2){
        return i;
      }
  }
  return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
