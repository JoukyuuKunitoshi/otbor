function bubbleSort(arr) {
    let swapped;
    let swaps = 0;//1

    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i+1]> arr[i]){
                [arr[i+1], arr[i]] = [arr[i], arr[i+1]];//2
                swapped = true;
                swaps += 1;
            }   
            //3
            if ((arr.toSorted()).reverse() == arr){
                console.log('Массив отсортирован, преждевременный выход')
                break;

            }
        }
    } while(swapped){
        return [arr, swaps];

    
            
    }


}
//4
function bubbleStringSort(arr) {
    let swapped;
    let swaps = 0;//1

    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++){
            if (arr[i].localeCompare(arr[i + 1]) == 1){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
                swaps += 1;
            }   
            
        }
    } while(swapped){
        return [arr, swaps];

    
            
    }


}


function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i-1;
        //двигаем элементы вправоб пока не найдем место для вставки
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;//вставляем текущий элемент на нужное местo
        console.log(`${current} => ${j+1}`)
    }
    return arr;
}




function insertionDateSort(arr){ //7
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i-1;
        //двигаем элементы вправоб пока не найдем место для вставки
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;//вставляем текущий элемент на нужное местo
        
    }
    return arr;
}




function insertionAlmostSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i-1;
        //двигаем элементы вправоб пока не найдем место для вставки
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
            if(arr[i]> arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
        arr[j+1] = current;//вставляем текущий элемент на нужное местo
        
    }
    return arr;
}



console.log(insertionAlmostSort(5,3,2,5,4,8))
console.log(insertionDateSort([new Date('2024-01-02'), new Date('2024-04-07'),new Date('2024-05-02'),new Date('2024-02-02'),new Date('2024-04-06')]))
console.log(insertionSort([5,3,8,4,2]))
console.log(bubbleStringSort(['orange','apple','alpaka', 'banana', 'grape', 'a', 'b', 'c']))
console.log(bubbleSort([6,5,4,3,1,2]));