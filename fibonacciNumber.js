const fibo=(n)=>{
    const fibnum=[0,1]
    for(let i=2;i<n;i++){
        const next=fibnum[i-1]+fibnum[i-2]
        fibnum.push(next)
    }
    return fibnum
}
console.log(fibo(10))