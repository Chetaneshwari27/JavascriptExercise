const valid=(mail)=>{
    const email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return email.test(mail)
}
console.log(valid("chetu@gmail.com"))