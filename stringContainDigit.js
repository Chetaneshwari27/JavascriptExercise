const check=(str)=>{
    return /\d/.test(str)
}
const str="word1"
const res=check(str)
if(res)
    console.log("Yes the string contain digit")
else    console.log("No the string does not contain digit")