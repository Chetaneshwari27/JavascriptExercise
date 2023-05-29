const removeDuplicates=(arr)=>{
    return [...new Set(arr)]
}
const arr=[10,10,11,12,13]
console.log(removeDuplicates(arr))