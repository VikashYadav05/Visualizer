export function selectionSort(arr: any[],arrSize: number) {
    var min_idx: number;
    let visuals = [];
    for (let i = 0; i <arrSize - 1; i++) {
      min_idx = i;
      
      //setTimeout(()=>{
      for (let j = i + 1; j < arrSize ; j++)
      {
        visuals.push(["comparing", i,j]);
        if (arr[j] < arr[min_idx])
            min_idx = j;
        visuals.push(["compared", i, j]);
      }  
        
      visuals.push(["swap", i, min_idx, arr[i],arr[min_idx]]);
      var temp = arr[min_idx];
      arr[min_idx] = arr[i];
      arr[i] = temp;
           
    //},100);
    }
    return visuals;
  }