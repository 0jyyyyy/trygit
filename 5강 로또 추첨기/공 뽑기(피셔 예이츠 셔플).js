/**
 * 피셔 예이츠 셔플(Fisher-Yates Shuffle) : 알고리즘의 하나 
 * 
 * 퀴즈 
 * 피셔-예이츠 셔플을 구현할 때 for문 대신 while 문을 쓴 이유가 있다. while 문 대신 for문으로 만들어 보고, 어떨 때 while 문이 좋고,
 * for 문이 좋은지 느껴보자
 * 단, for문에서는 사용하는 변수 i의 시작값이 candidate.length 가 되게 하자
 * 
 * 풀이
 * const candidate = Array(45).fill().map((el,i) => i + 1);
 * const shuffle = [];
 * for(let i = candidate.length; i > 0, i--){
 *      const random = Math.floor(Math.random() * i); //무작위 인덱스 뽑기
        const spliceArray = candidate.splice(random, 1); //뽑은 값은 배열에 들어 있음
        const value = spliceArray[0]; //배열에 들어 있는 값을 꺼내어
        shuffle.push(value); // ;shuffle 배열에 넣기
 * 
 * }
 * 
 * while 문은 조건이 간단하면 쓰기 편하고, 조건이 복잡하면 for문을 쓰는게 좋다.
 * while 문은 정확하게 몇 번 반복해야할지 모를때 사용하는것이 좋다.
 * i + 2, i--, i++ 등 이러한 조건이 들어갈 경우에는 for문을 사용하는것이 좋다.
 * 
 * 공 정렬하기
 * 
 * 반복문을 통해 45개의 숫자를 shuffle 배열에 넣어놓았다.  이 숫자들을 오름차순으로 정렬하려면 어떻게 해야할까?
 * 전체 숫자를 쭉 훑어보고 가장 작은 숫자를 하나 가져오고, 다시 그 다음 작은 숫자를 가져온다.
 * 이런 식으로 숫자가 작은 순서대로 하나씩 가져오다 보면 모든 숫자가 정렬되는데, 이같은 정렬을 선택 정렬(selection sort) 알고리즘 이라고 한다.
 */

