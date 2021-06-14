'user strict';

let counter = document.getElementById('donorsNumber');
let arrayOfDonors = grabDonors();

counter.textContent = arrayOfDonors.length;






function grabDonors() {

    let storedDonArr = JSON.parse(localStorage.getItem('arrayDonors'));
    return storedDonArr;
  }
