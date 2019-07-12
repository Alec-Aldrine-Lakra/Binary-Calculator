let s=[],result='',op='';
function calculate(n)
{
    if(n=="0")
       s.push(0);
   else if(n=="1")
       s.push(1);
   else if(n=="2"){
           s=[];
           result='';
   }
   else if(n=="3" && s.length!=0 && op!='')
       {
           let str=s.join("").trim();
           let i = str.indexOf(op);//finding index of +,-,/,*
           let op1 = str.substring(0,i);//first operand
           let op2 = str.substring(i+1,str.length);//second operand
           switch(op)
           {
               case '+':    op1=parseInt(op1,2);
                            op2=parseInt(op2,2);
                            result+=decToBin(op1+op2);
                            break;
                   
               case '-':    op1=parseInt(op1,2);
                            op2=parseInt(op2,2);
                            result+=decToBin(op1-op2);
                            break;
                   
               case '*':    op1=parseInt(op1,2);
                            op2=parseInt(op2,2);
                            result+=decToBin(op1*op2);
                            break;
                   
               case '/':    op1=parseInt(op1,2);
                            op2=parseInt(op2,2);
                            result += decToBin(Math.floor(op1/op2));
                            break;
           }
           s=result.split("");
           op=result='';
       }
   else if(n=="4" && s.length!=0 && op==''){
       s.push('+');
       op='+';
   }
   else if(n=="5" && s.length!=0 && op==''){
       s.push('-');
       op='-';
   }
   else if(n=="6" && s.length!=0 && op==''){
       s.push('*');
       op='*';
   }
   else if(n=="7" && s.length!=0 && op==''){
       s.push('/');
       op='/';
   }
   
    document.getElementById("res").innerHTML = s.join("");    
}
function decToBin(n)
{
  let num=0,c=0;
  while(n>0)
  {
      let r=n%2;
      n=Math.floor(n/2);
      num+=r*Math.pow(10,c);
      c++;

  }
  return num;
}