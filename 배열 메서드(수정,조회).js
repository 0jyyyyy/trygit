//배열에서 마지막 요소 삭제하기 => pop
const target = ['a','b','c','d'];
target.pop();
console.log(target);

//배열에서 첫번째 요소 삭제하기 => shift
target.shift();
console.log(target);

//즉, shift-unshift pop-push 가 한 짝이라고 생각하고 외울것


target[target.length-1] = null;
console.log(target);

target.pop();
console.log(target);

target.unshift('a');
target.push('c');

console.log(target);

//중간 요소를 제거하는 방법 => splice
target.splice(1,1); // (a,b) a= 기준이 되는 인덱스 , b= a로부터 b번째까지 지우고싶은것
console.log(target);

target.splice(1); // 하나만 썻을경우에는 기준 인덱스부터 나머지를 전부 삭제
console.log(target);

target.splice(1,2,'b','c');  // 문자를 지우면서 추가도 할수 있다
console.log(target);

target.splice(2,0,'1') // 이런방식이면 하나도 지우지 않고 추가할수 있다.
console.log(target);


//배열에서 요소 찾기
//배열에 특정 요소가 있는지 찾는 검색기능 => includes

const result = target.includes('1'); //특정 요소가 있으면 true

const result2 = target.includes('d');//특정 요소가 없다면 false

console.log(result); 
console.log(result2);

//검색하고 싶은 값이 몇 번째 인덱스에 위치하는지 아는 방법 => indexOf, lastIndexOf

const result3 = target.indexOf('1');

const result4 = target.lastIndexOf('b');

const result5 = target.indexOf('d'); // 검색하고 싶은 값이 없으면 -1이 나온다.

console.log(result3);
console.log(result4);
console.log(result5);

//배열 반복하기
//배열은 값들을 나열한 것이기 때문에 반복문과 같이 사용하는 경우가 많다.

// let i = 0;
// while(i<target.length){
//     console.log(target[i]);
//     i++;
// }

//문자열도 가능하다.
const target2 = '가나다라마';
let i = 0;
while(i<target2.length){
    console.log(target2[i]);
    i++;
}

