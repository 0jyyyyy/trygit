//객체(object) : 자료형의 일종으로 다양한 값을 모아둔 또 다른 값
//객체의 종류 : 배열(array), 함수(function), 배열이나 함수가 아닌 객체가 있다

//배열
// 다양한 값을 하나로 묶어 놓은 객체

//이차원 배열
//배열 안에 배열을 넣을경우

//배열 내부에 든 값을 요소(element)라고 한다.

//배열의 요소 개수 구하기
//배열의 이름 뒤에 .length를 붙이면 된다.


//퀴즈
//arr 라는 배열이 있을 때, 배열의 마지막에서 세 번쨰 요소를 찾아보아라

const arr =[1,2,3,4,5];
console.log(arr[arr.length-3]);

//배열의 요소 추가하기
// 인덱스의 값을 알고 있을경우에는, 
//const target = ['a','b','c','d','e'];
//target[5] = 'f';
//console.log(target);

//인덱스의 값을 모를경우에는,
//const target = ['a','b','c','d','e'];
//target[target.length] = 'f';
//console.log(target);

//이같은 경우에는 맨뒤에 값을 추가하는것이다.

//배열의 제일 앞에 추가하고 싶을때  => unshift
//const target = ['a','b','c','d','e'];
//target.unshift('1');
//console.log(target);

//배열의 제일 뒤에 추가하고 싶을때 => push
const target = ['a','b','c','d','e'];
target.push('1');
console.log(target);


//여기서 잠깐!
//const는 상수라고 했는데 수정이 왜 가능한가?
//const가 엄밀히 상수는 아니다. const에는 새로운 값을 대입(=)하지만 못한다고 기억하면 된다.
//즉, 
//const one = ['a','b'];
//one.push or unshift 등 배열안의 요소를 바꾸는건 가능하나,
//const one =['a','b','c']; 요런건 불가능

