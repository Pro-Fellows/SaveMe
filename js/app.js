'user strict';

let counter = document.getElementById('donorsNumber');
let arrayOfDonors = grabDonors();

counter.textContent = arrayOfDonors.length;






function grabDonors() {

  let storedDonArr = JSON.parse(localStorage.getItem('arrayDonors'));
  return storedDonArr;
}



let videoElem = document.getElementById('v');
let targetEl = document.getElementById('up');
ScrollTrigger.create({
  trigger: targetEl,
  onEnter: () => videoElem.play(),
  onEnterBack: () => videoElem.play(),
  onLeave: () => videoElem.pause(),
  onLeaveBack: () => videoElem.pause(),
});

