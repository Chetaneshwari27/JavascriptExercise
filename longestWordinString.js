const longestword=(str)=>{
    const words=str.split(' ')
    let lword=''
    for(let i=0;i<words.length-1;i++)
    {
        if(words[i].length>lword.length)
            lword=words[i]
    }
    return lword
}
const str="Precious info system"
console.log(longestword(str))