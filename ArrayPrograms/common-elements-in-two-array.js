const commonElement=(arr1,arr2)=>{
    return arr1.filter(ele=>arr2.includes(ele))
}
const arr1=[10,11,12,13]
const arr2=[10,11,45,65]
console.log(commonElement(arr1,arr2))