const remove=(arr,value)=>{
    return arr.filter(ele=>ele!=value)
}
const arr=[1,2,3,3,4,5,5]
console.log(remove(arr,3))