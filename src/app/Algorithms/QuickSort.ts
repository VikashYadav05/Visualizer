function partition(arr: any[], low: number, high: number, visuals: any[]) {
    
    let pivot = arr[high];
    let i = low - 1;
    visuals.push(['pivot', high]);
    for (let j = low; j <= high - 1; j++) {
       
        if (arr[j] < pivot) {
            visuals.push(['comparing', j, high]);
            visuals.push(['compared', j, high]);
            i++;
            visuals.push(['swap', i, j, arr[i], arr[j]]);
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
        }
    }
    visuals.push(['clearPivot', high]);
    visuals.push(['swap', i+1, high, arr[i+1], arr[high]]);
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; 
    return i + 1; 
}

export function quickSort(arr: any[], low: number, high: number, visuals: any[]) {
    if (low < high) {
        let pi = partition(arr, low, high,visuals);
        quickSort(arr, low, pi - 1, visuals);
        quickSort(arr, pi + 1, high, visuals);
    }
}
