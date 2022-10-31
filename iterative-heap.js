const minHeapify = (arr, n) => {
  for(let i = 1; i < n; i++){
    //If child is greater than parent
    if(arr[i] < arr[parseInt((i - 1) / 2)]){
      let j = i;
      
      // swap child and parent until 
      // parent is smaller
      while (arr[j] < arr[parseInt((j - 1) / 2)]) {
          //Get the indexes of both the child
          const l = j;
          const r = parseInt((j - 1) / 2);
          
          //Swap
          [arr[l], arr[r]] = [arr[r], arr[l]];
          
          //reduce
          j = parseInt((j - 1) / 2); 
      } 
    }
  }
}

const heapSort = (arr, n = arr.length) => {
  minHeapify(arr, n);
  
  for(let i = n - 1; i > 0; i--){
    // swap value of first indexed 
    // with last indexed 
    [arr[0], arr[i]] = [arr[i], arr[0]]; 
  
    // maintaining heap property 
    // after each swapping 
    let j = 0, index; 
    
    do { 
        index = (2 * j + 1); 
  
        // if left child is smaller than 
        // right child point index variable 
        // to right child 
        if (index < (i - 1) && arr[index] > arr[index + 1]) {
          index++; 
        }
  
        // if parent is smaller than child 
        // then swapping parent with child 
        // having higher value 
        if (index < i && arr[j] > arr[index]) {
          [arr[j], arr[index]] = [arr[index], arr[j]];
        }
      
        j = index; 
      } while (index < i); 
  }
}
