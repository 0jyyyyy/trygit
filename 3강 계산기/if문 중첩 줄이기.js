//if 문이 중첩되어 사용될때
// if(조건 A){
//     if(조건 B){
//         if(조건 C){
        
//         }
//     }else{
//         if(조건 D){
//             // 나는 어떤 때 실행 되지?
//             if(조건 E){

//             }else{
//                 // 나는?
//             }
//             //나는?
//         
//         }else{

//         }
//     }
// }

// 상당히 헷갈린다.
// 위에 있는 조건문도 중첩을 제거해봐라

// 중첩을 제거하는 방법
/**
 * 1. if문 다음에 나오는 공통된 절차를 각 분기점 내부에 넣는다.
 * 2. 분기점에서 짧은 절차부터 실행하게 if문을 작성한다.
 * 3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for문 내부의 경우)로 중단한다.
 * 4. else를 제거한다.(이때 중첩 하나가 제거된다.)
 * 5. 다음 중첩된 분기점이 나오면 1 ~ 4 의 과정을 반복한다.
 */

//퀴즈

// function test() {
//     let result = '';
//     if(a) {
//         if(!b){
//             result = 'c';
//         }
//     }else{
//         result = 'a';
//     }
//     result += 'b';
//     return result;
// }

// 위 코드의 if문 중첩을 줄여보아라

//정답
//         function test() {
    //     let result = '';
    //     if(!a) {
    //      result = 'a';
    //      result += 'b';
    //      return result;
    //      }
    //     
    //       if(!b){
    //          result = 'c';
    //      }
    //      result += 'b';
    //      return result;
    //     }
    //     
