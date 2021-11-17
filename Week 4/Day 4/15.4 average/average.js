function calcAverage (arr){
    var sum = 0;
    for ( var i = 0 ; i < arr .length; i ++ ){
        sum += arr [ i ];
    }
    return sum/arr.length; ;
    }
console.log(calcAverage ([ 85 , 90 , 92 ]));

// line 2 is the issue, initialization of sum sould be a number.