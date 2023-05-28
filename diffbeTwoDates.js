const diff=(date1,date2)=>{
    const oneDay=24*60*60*1000
    const diffday=Math.round(Math.abs((date1-date2)/oneDay))
    return diffday
}
var date1 = new Date("06/30/2019")
var date2 = new Date("07/30/2019")
console.log(diff(date1,date2))