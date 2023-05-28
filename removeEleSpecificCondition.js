const removeEle=(arr,condition)=>{
    return arr.filter(ele=>!condition(ele))
}
const arr=[23,43,5,6,7,23]
console.log(removeEle(arr,3))