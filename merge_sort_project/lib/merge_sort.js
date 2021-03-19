function merge(array1, array2) {
    let merged = [];
        // keep running while either array still contains elements
    while (array1.length || array2.length) {
        // if array1 is nonempty, take its the first element as ele1
        // otherwise array1 is empty, so take Infinity as ele1
        let ele1 = array1.length ? array1[0] : Infinity;
        let ele2 = array2.length ? array2[0] : Infinity;

        let next; 
        // remove the smaller of the eles from it's array
        if (ele1 < ele2) {
            next = array1.shift();
        } else {
            next = array2.shift()
        }
        // and add that ele to the new array

        merged.push(next);
    }
    return merged;
}

function mergeSort(array) {

    if (array.length < 2) return array; 

    let mid = Math.floor(array.length / 2); //
    let leftHalf = array.slice(0, mid);
    let rightHalf = array.slice(mid);

    let sortedLeft = mergeSort(leftHalf); //
    let sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight)

}

module.exports = {
    merge,
    mergeSort
};