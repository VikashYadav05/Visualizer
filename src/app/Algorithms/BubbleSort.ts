export function bubbleSort(arr: number[],  n: number)
{
    var i, j, temp;
    var swapped;
    let visuals = [];
    for (i = 0; i < n - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) 
        {   
            visuals.push(['comparing', j, j+1]);
            if (arr[j] > arr[j + 1]) 
            { 
                visuals.push(['swap', j, j+1, arr[j], arr[j+1]]);
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;                             
            }         
            visuals.push(['compared', j, j+1]);    
           
        }
        if (swapped == false)
        break;
    }
    return visuals;
}