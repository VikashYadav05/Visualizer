function merge(arr: number[],l: number,m:number, r: number, visuals: any[])
{
    var n1 = m - l + 1;
    var n2 = r - m;

    var L = new Array(n1); 
    var R = new Array(n2);

    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    var i = 0;
    var j = 0;
    var k = l;

    while (i < n1 && j < n2) {
        visuals.push(['comparing', l+i, m+1+j]);
        visuals.push(['compared', l+i, m+1+j]);
        if (L[i] <= R[j]) {
        visuals.push(['insert', k, 0, 0, L[i]]);    
            arr[k] = L[i];
            i++;
        }
        else {
            visuals.push(['insert', k, 0, 0, R[j]]);    
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        visuals.push(['insert', k, 0, 0, L[i]]);    
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        visuals.push(['insert', k, 0, 0, R[j]]);    
        arr[k] = R[j];
        j++;
        k++;
    }
}

export function mergeSort(arr: number[],l: number, r: number, visuals: any[]){
    if(l>=r){
        return;
    }
    var m =l+((r-l)/2 | 0);
    mergeSort(arr,l,m, visuals);
    mergeSort(arr,m+1,r, visuals);
    merge(arr,l,m,r, visuals);
}