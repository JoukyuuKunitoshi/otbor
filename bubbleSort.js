function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i]> arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
            console.log(arr);
        }
    } while(swapped){
        return arr;
            
    }


}
console.log(bubbleSort([1, 5, 8, 2, 9, 12, 10]));