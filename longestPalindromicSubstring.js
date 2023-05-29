const logestPlaindromic=(str)=>{
    let longestSubString=''
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            const subString=str.slice(i,j)
            if(isPalindrome(subString)&&subString.length>longestSubString.length){
                longestSubString=subString
        }
    }

    }    return longestSubString
}
const isPalindrome=(str)=>{
    const rev=str.split('').reverse().join('')
    return rev===str
}
console.log(logestPlaindromic("SuS MoM mmoomm"))