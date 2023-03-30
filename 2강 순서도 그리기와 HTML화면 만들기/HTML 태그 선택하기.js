//보통 자바스크립트에서 HTML 태그를 가져오는 것을 선택한다고 표현한다.
// 선택하기 위해서는 특별한 함수와 특별한 방법을 사용한다.
// 특별한 함수는 document.querySelector

//사용법
//document.querySelector("선택자")

//선택자는 HTML 태그를 선택할 수 있게 도와주는 문자열이다.

//태그가 여러 개 있는 경우에는 document.querySelectorAll 함수를 사용하면 된다.

/*<body>
    <div><span id="order">1</span>번째 참가자</div>
    <div>제시어: <span id="word"></span></div>
    <input type="text">
    <button class="target">입력</button>
    <button class="btn">버튼2</button>
    <button class="btn target">버튼3</button>
    <script>
   const number = parseInt(prompt("몇 명이 참가하나요?"),10);
    alert(number);
    const yesOrNo = confirm("확인이나 취소를 눌러주세요");
    
    //const $button = document.querySelector('button'); HTML태그 선택하여 변수안에 넣을때는 변수앞에 $를 붙여준다.
    //document.querySelector('#order'); #은 아이디를 의미하는것으로, 아이디가 order인 것을 찾는것이다. 딱 하나만 있는 고유한값
    
    
    //document.querySelectorAll('.target'); //.은 클래스를 의미 즉, btn인 클래스를 찾는것
    const $span = document.querySelector('div span'); 공백이 있으면 하위(자손)태그를 의미한다.
    const $span = document.querySelector('div>span'); 자식 태그만 찾는 방법 
    자식 , 자손 태그의 차이점
    자식 : div태그 안에 있는 span 즉, 바로 안에 있는 것을 자식
    자손 : span 태그 안에 있는 모든것까지가 자손
</script>
</body>
*/

//퀴즈
/**
 * a태그 안에 id가 b인 태그 안에 class가 c인 태그를 선택하는 방법은?
 * 
 * 1. a b c
 * 2. a .b #c
 * 3. a #b .c 요놈
 * 4. a .b .c
 * 
 * 
 */