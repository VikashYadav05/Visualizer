export function insertionSort(arr: number[],  n: number)  
{  
    let i, key, j;  
    let visuals = [];
    for (i = 1; i < n; i++) 
    {  
        key = arr[i];  
        j = i - 1;  
        while (j >= 0 && arr[j] > key) 
        {  
            visuals.push(['comparing', i, j]);
            visuals.push(['compared', i, j]);
            visuals.push(['insert', j+1, j, arr[j+1], arr[j]]);
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        visuals.push(['insert', j+1, i, arr[j+1], key]);
        arr[j + 1] = key;  
    }  
    return visuals;
}  