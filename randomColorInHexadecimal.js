const generate=()=>{
    const letters='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        const randomIndx=Math.floor(Math.random()*16)
        color+=letters[randomIndx]
    }
    return color
}
console.log(generate())