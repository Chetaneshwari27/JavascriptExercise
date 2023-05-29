const missing=(arr)=>{
    const n=arr.length+1
    const expectedSum=(n*(n+1))/2
    const actualSum=arr.reduce((sum,num)=>sum+num,0)
    return expectedSum-actualSum
}
const arr=[1,2,3,5]
console.log(missing(arr))