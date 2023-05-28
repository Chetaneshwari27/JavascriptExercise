const common=(arr1,arr2)=>{
    return arr1.filter(a=>arr2.includes(a))
}

const arr1=[12,20.34,34,21,32]
const arr2=[20,30,32,21,12,43]
const com=common(arr1,arr2)
console.log(com)
