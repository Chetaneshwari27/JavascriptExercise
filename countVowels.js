const count=(str)=>{
    return (str.match(/[aeiou]/gi)).length
}
console.log(count("Precious"))