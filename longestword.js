const getlongest =(arr)=>{
    return arr.reduce((a,b)=>{
        return a.length>b.length?a:b;
    });
}
const arr=["Precious","Info","System"]
const res=getlongest(arr)
console.log(res)