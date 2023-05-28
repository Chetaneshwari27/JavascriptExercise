const diff=(arr1,arr2)=>{
    return arr1.filter(ele=>!arr2.includes(ele))
}
const arr1=[23,21,24,70,34]
const arr2=[20,34,54,23,67]
console.log(diff(arr1,arr2))