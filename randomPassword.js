const pass=(length)=>{
    const ch='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let pass=''
    for(let i=0;i<length;i++)
    {
        const random=Math.floor(Math.random()*ch.length)
        pass+=ch[random]
    }
    return pass
}
console.log(pass(9))