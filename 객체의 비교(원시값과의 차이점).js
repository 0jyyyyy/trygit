//객체 간의 비교
//객체끼리는 모양이 같아도 비교해보면 false가 나온다

const a = { name:'ojy'};
const array = [1,2,a];
console.log(a === array[2]);
console.log(array === [1,2,a]); // 비교를 하기위해 만든 [1,2,a] 배열이 array와는 다른 주소값이기때문에 false가 나온다.

//객체들은 그때그때마다 따로 생기기때문에 false가 나온다.

//즉, 객체끼리는 변수에 넣어놓지 않으면, 모양이 같아 보여도 다르다.

//객체일때는 바로 서로를 가르키는데(참조객체), 
//객체가 아닌 값은 별도의 저장공간을 따로 가르킨다.

//퀴즈
//다음과 같이 객체 안에 객체가 있을 때, '오' 값에 접근하는 방법은?

const ojy = {
    name : {
        first : '준영',
        last : '오',
    },
    gender : 'M',
};

console.log(ojy.name.last);