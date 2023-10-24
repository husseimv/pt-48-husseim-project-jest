function digPow(n, p){
    const num1=n.toString();
    const num2=p.toString();
    let sum=0;
    
    for(let i=0;i<num1.length;i++){
      sum=sum+Math.pow(parseInt(num1.charAt(i)),p);
      p++;
      if(sum%n==0){return sum/n;}
    }
    return -1;
}

module.exports = digPow;
