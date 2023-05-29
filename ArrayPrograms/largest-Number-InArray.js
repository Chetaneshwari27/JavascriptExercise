const largestNumber=(arr)=>{
    let largest=arr[0]
    for(let i in arr){
        if(arr[i]>largest)
            largest=arr[i]
    }
    return largest
}
const arr=[1,2,3,4,5,6]
console.log(largestNumber(arr))