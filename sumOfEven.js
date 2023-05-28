const sum=(arr)=>{
    return arr.reduce((sum,number)=>{
        if(number%2===0)
            return sum+number
        else return sum
    },0)
}
const arr=[10,20,34,23,56,77]
console.log(sum(arr))