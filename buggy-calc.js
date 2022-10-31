let buggyCalculator = (n1, n2) => {
 let max = n1 > n2 ? n1 : n2;
 let sum = '';
  //Iterate through all the digits of greater number    
  while(parseInt(max) > 0){
     //Extract the last digit
     let last  = n1 % 10;
     let last2 = n2 % 10;
     
     //Add the last digit
     let d = last + last2;
    
     //if the sum is greater than one digit then extract the last digit. 
     d = (d > 9) ? d % 10: d;
    
     //Prefix the digit
     sum = d.toString() + sum;
    
     //remove the last digit.
     n1 =  parseInt(n1 / 10);
     n2 = parseInt(n2 / 10);      
     max /= 10;
  }
    
  //Return the buggy sum
  return Number(sum);
}

/*
Input:
console.log(buggyCalculator(11, 9)); 
console.log(buggyCalculator(25, 25));
console.log(buggyCalculator(793, 5142314));

Output:
10
40
5142007

/* How it works
   let max = n1 > n2 ? n1 : n2; = 11;
   let sum = '';
   loop
   while(parseInt(11) > 0){
     let last  = n1 % 10; = 1
     let last2 = n2 % 10; = 9
     
     let d = last + last2; = 10
     d = (d > 9) ? d % 10: d; = 0
     sum = d.toString() + sum; = 0 + '' = 0

     n1 =  parseInt(n1 / 10); = 1
     n2 = parseInt(n2 / 10);  = 0    
     max /= 10; = 1
   }

   while(parseInt(1) > 0){
     let last  = n1 % 10; = 1
     let last2 = n2 % 10; = 0
     
     let d = last + last2; = 1
     d = (d > 9) ? d % 10: d; = 1
     sum = d.toString() + sum; = 1 + 0 = 10

     n1 =  parseInt(n1 / 10); = 0
     n2 = parseInt(n2 / 10);  = 0    
     max /= 10; = 0
   }
   
   return 10;
*/
*/
