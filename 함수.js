//함수(function)
//일정한 동작을 수행하는 코드를 의미한다.
//function 예약어를 사용하거나 =>(화살표) 기호를 사용한다.

//function(){}
// 또는
//() => {}

//함수에 이름을 붙이는 방법
//function a() {} 함수 선언문
//const b = function() {}; 함수 표현식
//const c = () => {}; 화살표 함수

//호출한다
//function a() {}
//a();

function a(){
    console.log('Hello');
    console.log('Function');

}
a();

function b(){
    return '반환값'; // 함수를 종료시킨다
    console.log('hi');
}
console.log(b());

function c(){
    if(true){ //true false 에 따라 콘솔 로그의 값이 변한다.
        return;
    }
    console.log('hello');
}

//return 값을 여러개 하고싶을때
function d(){
    return[1,5];
}
console.log(d());

