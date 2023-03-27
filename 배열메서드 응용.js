//퀴즈
//다음 배열에서 '라'를 모두 제거하세요. indexOf 와 splice를 사용하세요

const arr = ['가','라','다','라','마','라'];

// console.log(arr.indexOf('라'));
// arr.splice(1,1);
// console.log(arr);

// console.log(arr.indexOf('라'));
// arr.splice(2,1);
// console.log(arr);

// console.log(arr.indexOf('라'));
// arr.splice(3,1);
// console.log(arr);

let i = 0;
while(arr.indexOf('라') > -1){
    arr.splice(arr.indexOf('라'), 1)
    console.log(arr);
}


