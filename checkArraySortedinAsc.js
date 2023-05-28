const isSorted=(arr)=>{
    for(let i=0;i>arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false}
        else return true
    }
}
const arr=[1,3,4,5,6,7]
console.log(isSorted(arr))