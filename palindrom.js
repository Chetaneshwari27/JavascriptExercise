const check =(str)=>{
    const s=str.split('').reverse().join('')
    return s===str
}
const str="num";
const res=check(str)
if(res)
    console.log("Palindrom")
else console.log("Not Palindrom")