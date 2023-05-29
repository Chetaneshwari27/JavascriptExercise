const frequent=(arr)=>{
    const freMap={}
    for(let i in arr){
        const ele=arr[i]
        if(freMap[ele]){
            freMap[ele]++
        }
        else freMap[ele]=1
    }
    let mostFreq=null
    let hightestFreq=0

    for(const i in freMap){
        if(freMap[i]>hightestFreq){
            mostFreq=i
            hightestFreq=freMap[i]
        }
    }
    return mostFreq
}
const arr=[1,2,3,4,5,5]
console.log(frequent(arr))