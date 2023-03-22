//별찍기
/* 
1번
    *
    **
    ***
    ****
    *****
*/

// for(let i = 0; i < 5; i++){
        // console.log('*'.repeat(i+1));   
//}

/*
2번
    *****
    ****
    ***
    **
    *
*/
// for(let i = 5; i >=1; i--){
//     console.log('*'.repeat(i));
// }
// for(let i = 0; i < 5; i++){
//     console.log('*'.repeat(5 - i));
// }

/* 
3번
    *
    ***
    *****
    *******
    *********
*/
// for(let i = 0; i < 10; i++){
//     if(i % 2 === 0) continue;
//     console.log('*'.repeat(i));
// }

/* 
4번
    *********
    *******
    *****
    ***
    *
*/

// for(let i = 0; i < 10; i++){
//     if(i % 2 === 0)continue;
//     console.log('*'.repeat(10 - i));
// }

/* 
5번
    *****
     ****
      ***
       **
        *
    앞이 비워지는 상태로 만들기
*/
// for(let i = 0; i < 5; i++){
//     console.log(' '.repeat(i) + '*'.repeat(5-i));
// }

/* 
6번
        *
       **
      ***
     ****
    *****
    앞이 채워지는 상태로 만들기
*/
// for(let i = 0; i < 6; i++){
//     console.log('*'.repeat(i) + ' '.repeat(6-i));
// }
/* 
7번
        *
       ***
      *****
       ***
        *
    마름모 만들기
*/
for(let i = 0; i < 5; i++){
    for(let j = 5; j > i; j--){
        console.log('*'.repeat(i) + ' '.repeat(j));
    }
}

/* 
7번
        *
       ***
      *****
     *******
    *********
    피라미드 만들기
*/