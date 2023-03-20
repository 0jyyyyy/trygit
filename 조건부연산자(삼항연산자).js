//조건부 연산자 사용하기
//조건식 ? 참 일때 실행되는 식 : 거짓 일때 실행되는 식

//ex)
/**
 * 5 > 0 ? '참입니다' : '거짓입니다';
 */

let condition = true;
let value = condition ? '참' : '거짓';
console.log(value);

//중첩된 조건부 연산 순서에는 안에 있는 조건부 연산자부터 생각한다.
//ex)
//let value = condition ? condition2 ? '둘 다 참' : 'condition만 참' : 'condition 거짓';

//let value = condition ? 'condition1 이 참' : condition2 ? 'condition2 가 참' : '둘 다 거짓';


//퀴즈
//다음 if문을 switch문과 조건부 연산자로 바꿔보아라

/* if문
    let cond = true;

    let value = '';

    if(cond){
        value = console.log('참');
    }else{
        value = console.log('거짓');
    }
*/

//swicth문

let cond = true;

let value1='';

switch(cond){
    case true:
        console.log('참');
    break;

    default:
        console.log('거짓');
        break;
}

//조건 연산자

let value2 = cond ? '참' : '거짓';
console.log(value2);
