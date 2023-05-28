const sum=(arr)=>{
    const sortedarray=arr.sort((a,b)=>b-a)
    return sortedarray[0]+sortedarray[1]
}
const arr=[10,43,56,32,78]
console.log(sum(arr))