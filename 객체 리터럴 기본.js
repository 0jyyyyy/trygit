//객체 리터럴
//배열이나 함수가 아닌 객체

// const name = '오준영';
// const year = 1992;
// const month = 3;
// const date = 24;
// const gender = 'M';

/* const ojy = {
    name : '오준영', // 속성(Property)
    year : 1992,
    month : 3,
    date : 24,
    gender : 'M', //마지막에 쉼표를 붙여서 다음 속성을 추가할 경우를 대비한다.
};
*/

//이런 식으로 객체를 사용하여 여러 개의 변수를 하나로 묶어서 사용할수 있다.
//속성 명 : 속성 값

//여러개의 변수를 사용하여 묶을때 이름이 필요한 경우에는 객체 리터럴,
//이름은 필요없고 단순히 묶기 위해서는 배열을 사용한다.

//객체 수정방법
//ojy.gender = 'F';

//객체 속성 제거
//delete ojy.gender;

//배열과 함수가 객체인 이유
//배열과 함수에도 속성들을 추가할 수도 있고 수정 및 제거할 수도 있다.
//객체는 함수의 배열을 포함하는 개념이라서 {}를 사용해 만든 객체를 객체 리터럴이라고 따로 부른다.

/*
    function hello() {}
    hello.a = 'really?';
    const array = [];
    array.b = 'wow';
    console.log(hello.a);
    console.log(array.b);
*/

//메서드 이해하기
//속성 값으로 자바스크립트의 모든 값을 넣을 수 있다.
//객체의 속성 값으로 함수를 넣었을 때 이 속성을 특별히 메서드(method)라고 한다.

const debug = {
    log: function(value){
        console.log(value);
    
    },
};
debug.log('Hello, Method');

//이 같은 형식은 console.log와 비슷한데, 이는 console이라는 객체 안에 log라는 메서드를 실행시킨것과 같다.