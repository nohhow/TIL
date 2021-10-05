function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var arr = [];
        
        for(var i = 0; i<n; i++){
            if (i === 0){
                arr.push(0);    
            }else if (i === 1){
                arr.push(1);
            }else{
                arr.push(arr[i-2] + arr[i-1]);
            }
        }
        
        
        //Return an array of fibonacci numbers starting from 0.
        return arr;
        
    //Do NOT change any of the code below 👇
    }
    
    