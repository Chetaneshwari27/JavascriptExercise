const title=(str)=>{
    return str.replace(/\w\S*/g,((word)=>str.charAt(0).toUpperCase()+word.substr(1).toLowerCase()))
}
console.log(title("fUn wOrd"))