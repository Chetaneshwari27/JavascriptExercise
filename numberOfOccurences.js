const countfun=(arr,ele)=>{
    return arr.reduce((count,current)=>count+(current===ele?1:0),0)
}
const arr=[1,2,3,4,5]
console.log(countfun(arr,3))