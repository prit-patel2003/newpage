let arr=[1,4,2,1,4,1,2,2]

for(let i=0;i<arr.length;i++){
    let temp=arr[i]
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]===temp){
            arr[j]==temp;
        }
    }
    console.log(arr)
}