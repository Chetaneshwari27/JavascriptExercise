const cal=(arr)=>{
    let maxdiff=0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            const diff=Math.abs(arr[i]-arr[j])
            if(diff>maxdiff)
                maxdiff=diff
        }
    }
    return maxdiff
}
const arr=[1,2,3,4,5,6,7]
console.log(cal(arr))