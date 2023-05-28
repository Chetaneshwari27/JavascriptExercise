const avg=(arr)=>{
    const sum= arr.reduce((total,a)=>total+a,0)
    return sum/arr.length
}
const arr=[1,2,3,4,5]
console.log(avg(arr))