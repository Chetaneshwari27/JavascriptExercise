const commonMultiple=(n1,n2)=>{
    let gcd=gretestCommonDivisor(n1,n2)
    return (n1*n2)/gcd
}
const gretestCommonDivisor=(n1,n2)=>{
    while(n2!==0){
        const temp=n2
        n2=n1%n2
        n1=temp
    }
    return n1
}
console.log(commonMultiple(10,15))