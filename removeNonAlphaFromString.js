const remove=(str)=>{
    return str.replace(/[^0-9a-zA-Z]/g,'')
}
console.log(remove("Pr@info2"))