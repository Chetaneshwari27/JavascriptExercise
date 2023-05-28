const check=(ip)=>{
    const ipadd=/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    return ipadd.test(ip)
}
console.log(check(455660982))