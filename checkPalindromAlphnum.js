const check=(str)=>{
    const alphanum=str.toLowerCase().replace(/[^a-z0-9]/g,'')
    const rev=alphanum.split('').reverse().join('')
    return rev===str
}
console.log(check("1sus1"))