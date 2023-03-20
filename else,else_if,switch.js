//else를 사용해 두 방향으로 분기하기

//ex)
/* if(조건식){ //조건식이 참인 값일 때 실행
 동작문;
}else{ 조건식이 거짓인 값일 때 실행
 동작문;
}
*/

//else if 를 사용해 여러 분기하기
//ex)
/* if(조건식){
   동작문;
  }else if(조건식){
   동작문;
  }else{
  
  } */

const score = 75;
if(score >=90){
    console.log("A+");
}else if(score >= 80){
    console.log("A");
}else if(score >= 70){
    console.log("B");
}else if(score >= 60){
    console.log("C");
}else{
    console.log("D");
}

//중첩 if 조건문 사용하기

let first = true;

let second = false;

if(first){
    console.log("첫 번째 조건 충족");
    if (second){
        console.log("두 번째 조건도 충족");
    }else{
        console.log("두 번째 조건은 불충족");
    }      
}else{
    console.log("첫 번째 조건 불충족");
}

//switch를 이용한 조건문

//ex)
/*
    switch(조건식){
        case 비교 조건식:
            동작문;
    }
*/

let value = 'a';
switch(value){
    case 'a':
        console.log(value);
        break;
}