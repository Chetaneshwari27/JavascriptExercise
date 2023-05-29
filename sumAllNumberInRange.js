const cal=(start,end)=>{
    let sum=0
    for(let i=start;i<=end;i++){
        sum+=i
    }
    return sum
}
console.log(cal(10,30))