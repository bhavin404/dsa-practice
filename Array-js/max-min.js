const arr=[9,10,5,6,3,1,2]

function findMaxMin(arr){
    let max = arr[0]
    let min = arr[0]
    

    for (let i =0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }else if(arr[i]<min){
            min = arr[i]
        }
    }
    
    return{max,min}
}
console.log(findMaxMin(arr))
 
//point to remember on how to solve max and min questions
//note: just put the 0th index as max and min and then compare it with every other values in array including itself