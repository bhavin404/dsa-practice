const arr = [1,2,3,4,5]

function reverseArray(arr){
    let reversedArr =[]
    for (let i =arr.length ; i >0; i--){
        reversedArr.push(arr[i-1])
    }
    return reversedArr;
}
console.log(reverseArray(arr))