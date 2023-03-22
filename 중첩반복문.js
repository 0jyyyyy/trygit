//중첩된 반복문
/*for(let i =0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(i,j);
    }
}
*/
/*
for(let i = 0; i < 5; i++){
    if(i % 2 === 0) continue;
    for(let j = 0; j < 5; j++){
        if(j % 2 === 0) continue;
        for(let k = 0; k < 5; k++){
            if(k % 2 === 0) continue;
            console.log(i,j,k);
        }
    }
}
*/
//중첩횟수가 증가할수록 코드가 점점 어려워진다.

//퀴즈
//구구단을 출력하되, 결과에 짝수가 하나도 나오지 않게 해보아라

for(let i = 1; i < 10; i++){
    for(let j = 1; j < 10; j++){
        let k = i * j;
        if(k % 2 === 0) continue;
        console.log(i + " * " + j + " = " + k);
    }
}