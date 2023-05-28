const common=(arr1,arr2)=>{
    return arr1.filter(ele=>arr2.includes(ele))
}
const arr1=[2,3,4,5,6,7]
const arr2=[4,5,6,7,8,8]
console.log(common(arr1,arr2))