const sum=(arr)=>{
    return arr.reduce((sum,num)=>sum+num,0)
}

// const sum=(arr)=>{
//     let sum=0
//     for(let i in arr){
//         sum+=arr[i]
//     }return sum
// }
    const arr=[1,2,3]
console.log(sum(arr))