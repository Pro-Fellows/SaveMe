
/* eslint-disable no-undef */
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
  swal('Sorry! You are not eligible!', 'You should be above 18 years old, in order to be eligible.', 'error');
  quiz.style.display = 'block';


}


function noOne(){
  q1.style.display = 'none';
  q2.style.display = 'block';


}

function yesTwo (){
  q2.style.display = 'none';
  swal('Sorry! You are not eligible!', 'You should be under 75  years old, in order to be eligible.', 'error');
  quiz.style.display = 'block';

}

function noTwo (){
  q2.style.display = 'none';
  q3.style.display = 'block';


}

function yesThree (){
  q3.style.display = 'none';
  swal('Sorry! You are not eligible!', 'Due to the risk of hepatitis, a waiting period of four months is required after recieving a tatto.', 'error');
  quiz.style.display = 'block';

}

function noThree (){
  q3.style.display = 'none';
  q4.style.display = 'block';


}
function yesFour (){
  q4.style.display = 'none';
  swal('Sorry! You are not eligible!', 'Women in these both cases increase the risk of complications such as anemia ', 'error');
  quiz.style.display = 'block';

}

function noFour (){
  q4.style.display = 'none';
  q5.style.display = 'block';


}

function yesFive (){
  q5.style.display = 'none';
  swal('Sorry! You are not eligible!', 'The bodies of people with heart conditions need much fluid!', 'error');
  quiz.style.display = 'block';

}

function noFive (){
  q5.style.display = 'none';
  q6.style.display = 'block';


}

function yesSix (){
  q6.style.display = 'none';
  wal('Sorry! You are not eligible!', 'Due to many reasons, people who take drugs are not allowed to donate blood! ', 'error');
  quiz.style.display = 'block';

}

function noSix (){
  q6.style.display = 'none';
  swal('Congratulations!', 'You are  eligible', 'success');
  quiz.style.display = 'block';

}


let coll = document.getElementsByClassName('collapsible');
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}



$(document).ready(function() {

  $('.pour') //Pour Me Another Drink, Bartender!
    .delay(0)
    .animate({
      height: '150px'
    }, 1500)
    .delay(15600);

  $('.pourTube') //Pour Me Another Drink, Bartender!
    .delay(0)
    .animate({
      height: '150px'
    }, 0)
    .delay(15600);

  $('#liquid') // I Said Fill 'Er Up!
    .delay(1300)
    .animate({
      height: '170px'
    }, 15000);

  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(3400)
    .animate({
      bottom: '200px'
    }, 2500);
});
