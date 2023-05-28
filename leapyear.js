const check=(year)=>{
    if((year%400===0 && year%100!=0)||year%4===0)
        return true
    else return false
}
const year=2020
const res=check(year)
if(res)
    console.log("Year is leap year")
else    console.log("Year is not leap year")