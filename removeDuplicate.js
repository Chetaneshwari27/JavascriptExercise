const newarr=(arr)=>{
    return [...new Set(arr)]
}
const arr=[11,11,12,2,3,3]
console.log(newarr(arr))