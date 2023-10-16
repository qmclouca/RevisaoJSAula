// function sayHello (nome){
//     console.log(`Hello, ${nome}`);
// }

// // const sayHello = (nome) => {
// //     console.log(`Hello, ${nome}`);
// // }
// sayHello("Rodolfo");

// const square = x => x*x;
// console.log(square(2));

// const square = (x,y) => x*y;
// console.log(square(2,3));

// const addM = (a,b) => {
//     const sum = a+b;
//     return sum;
// }
// console.log(addM(2,3));

function Timer() {
    this.seconds = 0;
    setInterval(function(){
        this.seconds++;
        console.log("Timer: " + this.seconds);
    }, 1000);
}
const timer = new Timer();

function Timer2(){
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log("Timer2: " + this.seconds);        
    },1000)
}
const timer2 = new Timer2();