let userName= 'Vale';
userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!');

let userQuestion= 'Is it going to be a good night?';
console.log(`Hi, I have a question...${userQuestion}`);

let randomNumber= Math.floor(Math.random()*8);
let eightBall='';
eightBall= randomNumber;

if (eightBall=== 0){
  console.log('It is certain');
}else if (eightBall=== 1){
  console.log('It is decidedly so');
}else if (eightBall=== 2){
  console.log('Reply hazy try again');
}else if (eightBall=== 3){
  console.log('Cannot predict now');
}else if (eightBall=== 4){
  console.log('Do not count on it');
}else if (eightBall=== 5){
  console.log('My sources say no');
}else if (eightBall=== 6){
  console.log('Outlook not so good');
}else if (eightBall=== 7){
  console.log('Signs point to yes');
}