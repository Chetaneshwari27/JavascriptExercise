const rotate=(arr,pos)=>{
    const rotated=[...arr]
    for(let i=0;i<pos;i++){
        rotated.unshift(rotated.pop())
    }
    return rotated
}
const arr=[30,20,10]
console.log(rotate(arr,2))