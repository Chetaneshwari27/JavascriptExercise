const calsq=(arr)=>{
    return arr.reduce((sum,n)=>sum+Math.pow(n,2),0)
}
const arr=[2,3,4,5]
console.log(calsq(arr))