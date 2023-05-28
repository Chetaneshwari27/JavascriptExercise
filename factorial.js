const fact =(num)=>{
    if (num==0||num==1)
        return 1
    else
        return num*fact(num-1)
}
const res=fact(5)
console.log(res)