let bubbleSort = (arr) =>{
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr.length-i-1; j++){
        // console.log(arr[j],arr[j+1])
        if(arr[j]>arr[j+1]){
          let temp =arr[j]
          arr[j] = arr[j+1]
          arr[j+1]=temp;
        }
      }
    }
    return arr;
  }
  console.log(bubbleSort([34,-4,6,56,23,-556,344]))