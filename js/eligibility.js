'use strict';

let quiz = document.getElementById('takeQuiz');
let q1 = document.getElementById('q1');
let y1 = document.getElementById('yfirst');
let n1 = document.getElementById('nfirst');
let q2 = document.getElementById('q2');
let y2 = document.getElementById('ysecond');
let n2 = document.getElementById('nsecond');
let q3 = document.getElementById('q3');
let y3 = document.getElementById('ythird');
let n3 = document.getElementById('nthird');
let q4 = document.getElementById('q4');
let y4 = document.getElementById('yfourth');
let n4 = document.getElementById('nfourth');
let q5 = document.getElementById('q5');
let y5 = document.getElementById('yfifth');
let n5 = document.getElementById('nfifth');
let q6 = document.getElementById('q6');
let y6 = document.getElementById('ysixth');
let n6 = document.getElementById('nsixth');


quiz.addEventListener('click', startQuiz);


y1.addEventListener('click', yesOne);
n1.addEventListener('click', noOne);
y2.addEventListener('click', yesTwo);
n2.addEventListener('click', noTwo);
y3.addEventListener('click', yesThree);
n3.addEventListener('click', noThree);
y4.addEventListener('click', yesFour);
n4.addEventListener('click', noFour);
y5.addEventListener('click', yesFive);
n5.addEventListener('click', noFive);
y6.addEventListener('click', yesSix);
n6.addEventListener('click', noSix);



function startQuiz(){

  q1.style.display = 'block';
  quiz.style.display = 'none';

}


function yesOne(){
  q1.style.display = 'none';
  swal('Sorry', 'You are not eligible', 'error');
  quiz.style.display = 'block';

}


function noOne(){
  q1.style.display = 'none';
  q2.style.display = 'block';


}

function yesTwo (){
  q2.style.display = 'none';
  swal('Sorry', 'You are not eligible', 'error');
  quiz.style.display = 'block';
}

function noTwo (){
  q2.style.display = 'none';
  q3.style.display = 'block';


}

function yesThree (){
  q3.style.display = 'none';
  swal('Sorry', 'You are not eligible', 'error');
  quiz.style.display = 'block';
}

function noThree (){
  q3.style.display = 'none';
  q4.style.display = 'block';


}
function yesFour (){
  q4.style.display = 'none';
  swal('Sorry', 'You are not eligible', 'error');
  quiz.style.display = 'block';
}

function noFour (){
  q4.style.display = 'none';
  q5.style.display = 'block';


}

function yesFive (){
  q5.style.display = 'none';
  swal('Sorry', 'You are not eligible', 'error');
  quiz.style.display = 'block';
}

function noFive (){
  q5.style.display = 'none';
  q6.style.display = 'block';


}

function yesSix (){
  q6.style.display = 'none';
  swal('Sorry', 'You are not eligible', 'error');
  quiz.style.display = 'block';
}

function noSix (){
  q6.style.display = 'none';
  swal('Congratulations!', 'You are  eligible', 'success');
  quiz.style.display = 'block';
}




