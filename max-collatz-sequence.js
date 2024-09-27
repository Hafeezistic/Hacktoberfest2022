let collatzSequence = () => {
 
    let memo = {}; //Store already computed sequence count
    let max = 0;   //Store the max count
    let index = 0; //Store the number with max count
   
    //loop from 1 to 1000000		
    for(let j = 1; j <= 1000000; j++){
        
	let count = 1; //initialize the count
	let i = j;     // use temp variable to compute the collatz sequence
        
        // compute the collatz sequence
	while(i > 1){
    
         //if the sequence is not already present then compute it
	 if(!memo[i]){
	    i = (i % 2 == 0) ? parseInt(i / 2) : parseInt((3 * i) + 1);
	    count++;
	 }else{
            //Else update the count with already stored sequence count
            count = count + memo[i] - 1;			
	    break;
	 }
       }
   
        //store the sequence for the given number
	memo[j] = count;
        
        //get the max count and number with max count
	if(max < count){
	  max = count;
	  index = j;
	}
    }
  
  //return the number
  return index;
}
