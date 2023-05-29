const avgWordLength=(str)=>{
    const words=str.split(' ')
    const wordlength=words.reduce((sum,word)=>sum+word.length,0)
    return wordlength/words.length
}
console.log(avgWordLength("Precious Info"))