function indexOfIgnoreCase(s1, s2) {
  // write your code here
  const s1Length=s1.length;
  const s2Length=s2.length;
  for(let i=0;i<s1Length-s2Length;i++){
    for(let j=s2Length;j<s1Length;j++){
      let sub=s1.substring(i,j);
      if(sub===s2){
        return i;
      }
    }
  }
  return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
