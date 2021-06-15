'user strict';

let counter = document.getElementById('donorsNumber');
let arrayOfDonors = grabDonors();

counter.textContent = arrayOfDonors.length;






function grabDonors() {

  let storedDonArr = JSON.parse(localStorage.getItem('arrayDonors'));
  return storedDonArr;
}



let videoElem = document.getElementById('v');
ScrollTrigger.create({
  trigger: videoElem,
  onEnter: () => videoElem.play(),
  onEnterBack: () => videoElem.play(),
  onLeave: () => videoElem.pause(),
  onLeaveBack: () => videoElem.pause(),
});

