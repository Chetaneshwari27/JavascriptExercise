const cal=(n1,n2,n3)=>{
    const sortedarr=[n1,n2,n3].sort((a,b)=>a-b)
    return sortedarr[1]
}
console.log(cal(2,5,3))