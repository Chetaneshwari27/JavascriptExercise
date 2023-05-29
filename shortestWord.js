const checkShortest=(str)=>{
    const words=str.split(' ')
    let shortest=words[0]
    for(let i=0;i<words.length;i++){
        if(words[i].length<shortest.length)
            shortest=words[i]
    }return shortest
}
console.log(checkShortest("Precious Info"))