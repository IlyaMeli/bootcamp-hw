// 1
let arr = Array(100).fill({}, 0);
// console.log(arr);
// 2
let nums = Array.from(arr, (_, x) => x + 1);
// console.log(nums);
//3
let obj = { key1: "value1", key2: "value2", key3: "value3" };
let arrObj = Object.keys(obj).map((key) => obj[key]);
// console.log(arrObj);
//4
let changeToObject = [1, 2, 3, 4];
let changed = { ...changeToObject };
// console.log(changed);
// 5
let checkArr = [1, 2, 3];
// console.log("Expected True: ", Array.isArray(checkArr));
// 6
let arr1 = ["?", "?", "?"];
let arr2 = [...arr1];
arr2[1] = "changed Value";
// console.log(arr1);
// console.log(arr2);
//7
arr3 = [1, 2, 3];
arr4 = arr3;
arr4[0] = "value";
console.log("Expected first item to be 'value' as in arr 4 well", arr3);
