'문자열이 긴 경우에는' + '문자열을' + '쪼갠 뒤' + '다시 합친다.'

//더하기표(+), 빼기표(-), 곱하기표(*), 나누기표(/), 나머지표(%), 제곱표(**)


5e4 = 5000
5e-4 = 0.0005
0b111 = 7 //2진법
0111 = 73 //8진법
0x1a1 = 273 //16진법

typeof NaN  //Number; 타입은 숫자인데 숫자가 아닌녀석(?) 

Infinity // 무한

'124' + 5 //1245

parseInt('124') + 5 //129 정수로만 취급한다.
parseFloat('3.14') // 소수로 바꿀때 사용
Number('3.14') // 정수,소수 둘다 가능하나, 숫자 형태에서만 가능

//ex parseInt('3월') => 3
//Number('3월') => NaN

typeof parseInt(prompt()); //프롬프트를 열어서 문자열을 직접 입력

//형 변환(type casting) : 다른 자료형으로 바뀌는것
//ex) '1' + 0 =>'10' 
//     1  + '0' =>'10'

