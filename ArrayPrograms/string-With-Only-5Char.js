const stringWith5Char=(arr)=>{
    let newstr=[]
    let count=0
    for(let i in arr){
        if(arr[i].length===5){
            newstr[count]=arr[i]
            count++
        }
    }
    return newstr
}
const arr=["Preci","Info","Syste"]
console.log(stringWith5Char(arr))