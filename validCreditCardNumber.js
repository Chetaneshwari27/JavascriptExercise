const valid=(num)=>{
    const credit=/^(?:\d{4}-){3}\d{4}$|\d{16}$/
    return credit.test(num)
}
console.log(valid(34557))