const capt=(str)=>{
    const words=str.split(' ')
    const captlize=words.map(words=>words.charAt(0).toUpperCase()+words.slice(1))
    return captlize.join(' ')
}
console.log(capt("how you doing"))