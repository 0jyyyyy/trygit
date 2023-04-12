/**
 * switch 문을 if문으로 바꿔보기
 * 
 * if(numTwo){
            switch(operator){
                case "+":
                    $result.value = parseInt(numOne) + parseInt(numTwo);
                    break;
                case "-":
                    $result.value = parseInt(numOne) - parseInt(numTwo);
                    break;
                case "*":
                    $result.value = parseInt(numOne) * parseInt(numTwo);
                    break;
                case "/":
                    $result.value = parseInt(numOne) / parseInt(numTwo);
                    break;
                default:
                    break;    
            }
        }else{
            alert("숫자를 먼저 입력하세요.")
        }
 */

/** 
if(numTwo){
    if(operator === '+'){
        $result.value = parseInt(numOne) + parseInt(numTwo);
    }else if(operator ==='-'){
        $result.value = parseInt(numOne) - parseInt(numTwo);
    }else if(operator ==='*'){
        $result.value = parseInt(numOne) * parseInt(numTwo);
    }else if(operator ==='/'){
        $result.value = parseInt(numOne) / parseInt(numTwo);
    }else{
        alert("숫자를 먼저 입력하세요.")
    }
}
*/

//퀴즈
/**
 * (가) 부분에 어떤 문자열을 넣으면 alert 창이 실행될까? 단 eval 의 실행을 막은 사이트들도 존재하므로 
 * calculator.html을 띄운 창의 콘솔에서 실행해야 한다.
 * 
 * const str = (가);
 * eval('a' + str + 't("eval은 위험")');
 * 
 * 예상 : (가) = ler
 * 결과 : 
 */