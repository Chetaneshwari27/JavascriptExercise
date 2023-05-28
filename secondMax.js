const second=(arr)=>{
    const sorted=arr.sort((a,b)=>b-a)
    return sorted[1]
}

const arr=[100,32,43,29,99,90]
const res=second(arr)
console.log(res)