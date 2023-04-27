/**
 * 1. 무작위로 숫자 뽑기
 *  무작위로 숫자를 뽑을 때는 Math.random 메서드를 사용
 *  뽑은 값이 정수가 아니므로 Math.floor 나 Math.ceil 메서드를 같이 사용
 * 
 * 2. 1부터 원하는 숫자까지 들어 있는 배열 만들기
 *  반복문을 사용해 배열에 숫자를 push하면 된다.
 *  
 *  const numbers = [];
 *  for(let n = 1; n <= 숫자; n += 1){
 *      numbers.push(n);
 *  } 
 * 
 * 3. indexOf 와 includes
 *   indexOf : 원하는 값이 들어 있다면 해당 인덱스를 알려주고, 들어 있지 않다면 -1을 반환
 *   includes : 조금 더 직관적으로 true/false 를 반환
 * 
 * '2345'.indexOf(3) === 1;
 * '2345'.indexOf(6) === -1;
 * 
 * ['2','3','4','5'].indexOf('5') === 3;
 * ['2','3','4','5'].indexOf(5) === -1; 요소의 자료형까지 같아야 함
 * 
 * '2345'.includes(3) === true;
 * ['2','3','4','5'].includes(5) === false;
 * 
 * 4. forEach 와 map
 *  다른 강좌에서 설명
 * 
 * 5. document.createElement, document.createTextNode
 *  각각 태그와 텍스트를 만드는 메서드
 *  단, 다른 태그에 append 나 appendChild 하기 전 까지는 화면에 보이지 않는다.
 * 
 * 6. appendChild 와 append
 *  document.createElement, document.createTextNode 로 만든 태그나 텍스트를 선택한 태그의 자식태그로 넣는다.
 *  appendChild 로는 하나만 넣을수 있고, append를 사용하면 여러 개를 동시에 넣을 수 있다.
 *  또한 append 로 텍스트를 추가할 때는 document.createTextNode 대신 문자열을 바로 넣어도 된다.
 */