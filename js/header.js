'use strict';
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 807 || document.documentElement.scrollTop > 807) {
    document.getElementById('header').style.backgroundColor = '#144955';
  } else {
    document.getElementById('header').style.backgroundColor = 'whitesmoke';
  }
}