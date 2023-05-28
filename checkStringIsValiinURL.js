const validurl=(str)=>{
    const url=/^(http|https):\/\/([a-zA-Z0-9]+\.){1,}[a-zA-Z0-9-]{2,}$/
    return url.test(str)
}
console.log(validurl("sjjdjnss"))