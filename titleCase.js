const titleCase=(str)=>{
    return str.replace(/\w\S*/g,(word)=>word.charAt(0).toUpperCase()+word.substr(1).toLowerCase())
}
console.log(titleCase("PreCious Info"))