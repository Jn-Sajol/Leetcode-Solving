var calculate = function(s) {
    s = "("+s+")"
    let stack = [];
    let temp = [];
    for(let i = 0; i < s.length; i++){
        if(s[i]===" ") continue;
        if(s[i]===")"){     
            while(stack[stack.length-1]!=="(") temp.push(stack.pop());                   
            stack.pop();
            stack.push(count(temp));
            continue;
        }
         if(isNum(stack[stack.length-1])&&isNum(s[i])){
            stack[stack.length-1]+=s[i];   
            continue;             
        } 
        if(s[i]==="-"||s[i]==="+"){
             if(stack.length===0||stack[stack.length-1]==="(") stack.push("0");    
        }
        stack.push(s[i]);
    }
    return stack[0];
};
    
function count(temp) {
 let res = Number(temp.pop());
 while(temp.length > 0) {
   let sign = temp.pop();
        if (sign === '+') {
            res  +=  Number(temp.pop());
        } else {
            res  -=  Number(temp.pop());
        }
  }  
    return res;
}
function isNum(str) {
  return /[0-9]+/.test(str);
}

calculate();