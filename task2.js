function bubbleSort(arr) {
    let swapped;


    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i+1]> arr[i]){
                [arr[i+1], arr[i]] = [arr[i], arr[i+1]];
                swapped = true;
            }   

        }
        
    } while(swapped){
        console.log(arr);
        console.log(`Победителем вышел рыцарь с ${arr[0]} победой/ами`);
        
            
    }


}
console.log(bubbleSort([1, 5, 20, 2, 9, 12, 10]));