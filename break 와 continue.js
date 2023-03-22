//break 문으로 반복문 멈추기
let i = 0;
while(true){
    if(i === 5) break;
    i++;
}
console.log(i);

//continue 문으로 코드 건너 뛰기

let j = 0;
while(j < 10){
    j++;
    if(j % 2 === 0){ // 짝수만
        continue;
    }
    console.log(j);
}