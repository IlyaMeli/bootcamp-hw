function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
    }
    console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

    //the issue is in line  2, arr[10] is undefined when you add a num to it it becomse NaN.
    //easy fix is to -1 each index.
