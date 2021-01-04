let arrayQuick = [1, 144, 22, 7, 4, 74, 121, -2, -3, 88];
function quickSort(array) {
    if ( typeof(masive) !== 'object' ){
        return false
    }
    if(arguments.length > 1 || arguments.length == 0){
        return false
    }

    if (array.length <= 1) {
        return array;
    }
    let pivot = array[array.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < array.length - 1; i++) {

        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }

    }

    return [...quickSort(left), pivot, ...quickSort(right)];

}



/*function merge(left, right) {
    if(typeof(left) != 'object' || typeof(right) != 'object' ){
        return false
    }
    if(arguments.length < 2 || arguments.length > 2){
        return false
    }
    if((left.length !== right.length) || (left.length -1 !== right.length) || (left.length !== right.length -1) ){
        return false
    }

    let arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return arr.concat(left.slice().concat(right.slice()));
}
function mergeSort(arr) {
    if(typeof(arr) != 'object' || typeof(arr) != 'object' ){
        return false
    }
    if (arguments.length > 1 || arguments.length < 1){
        return false
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}*/

