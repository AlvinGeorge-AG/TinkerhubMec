//console.log('Hello MEC')
// let x = 5;
// console.log(x);
// x = 10;
// console.log(x);
// const y = 12;
// console.log(y);
// // y = 13;
// // console.log(y)
// x = "helo"
// console.log(x)

// if(9<8){
//     console.log(1)
// }
// else{
//     console.log(0)
// }
let count = 0;
let count2 = 2;
function myFunc(param1){
    count += count2;
    console.log(` Hello ${param1}. Your count is: ${count}. You're welcome`)
}

function changeButton(){
    if(document.querySelector('.subBut') === 'Subscribe'){
        document.querySelector('.subBut').innerHTML = "Subscribed"
    }
}
myFunc()