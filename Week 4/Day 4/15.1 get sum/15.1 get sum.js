
    function getSum(arr1, arr2){
        let sum = 0;
        for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
        }
        for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
        }
        }
        console.log(getSum([1,2,3],[5,66,23]));

// Line 4 issue and line 11 length undefined no ",".
// Line 5 issue, assign to constant >> changed to let
//the function is not returning anything thats why its logging undefined.

