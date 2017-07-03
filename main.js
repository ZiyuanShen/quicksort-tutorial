
var items = [4, 2, 6, 5, 3, 9];

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;

    // complete_me

    return i;
}


function quickSort(items, left, right) {

    var index;

    // complete_me

    return items;
}

var result = quickSort(items);
console.log(result);
