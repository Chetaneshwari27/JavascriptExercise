const check=(arr,a)=>{
    for(let i in arr){
        if(arr[i]===a)
            return true
    }
    return false
}
const arr=[1,2,3,4,5]
console.log(check(arr,3))