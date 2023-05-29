const cal=(arr)=>{
    let largestproduct=Number.MIN_SAFE_INTEGER
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            const product=arr[i]*arr[j]
            if(product>largestproduct)
                largestproduct=product
        }
    }
    return largestproduct
}
const arr=[1,2,3,4,5,6]
console.log(cal(arr))