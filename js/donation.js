'use strict';

let formElement = document.getElementById('formID'); // Add the id

Donation.array = [];

function Donation(name, age, gender, weight, city, address, bloodType, avail1, avail2, phone) { // Don't forget to change the variables as the form

  this.name = name;
  this.age = age;
  this.gender = gender;
  this.weight = weight;
  this.city = city;
  this.address = address;
  this.bloodType = bloodType;
  this.avail1 = avail1;
  this.avail2 = avail2;
  this.phone = phone;
  this.frequency = 1;

  Donation.array.push(this);

}

if (localStorage.getItem('arrayDonors')) {
  Donation.array = grabDonors();
}


// console.log(Donation.array);



formElement.addEventListener('submit', submitHandling); // this is the form submit handling event.

function submitHandling(event) {
  event.preventDefault();
  console.log(event);
  let name = event.target.fname.value;
  let age = event.target.age.value;
  let gender = event.target.gender.value;
  let weight = event.target.weight.value;
  let city = event.target.city.value;
  let address = event.target.address.value;
  let bloodType = event.target.bloodType.value;
  let avail1 = event.target.availability1.value;
  let avail2 = event.target.availability1.value;
  let mobile = event.target.mobileNumber.value;



  let arrayTest = [];

  if (localStorage.getItem('arrayDonors')) {

    for (let i = 0; i < Donation.array.length; i++) {
      arrayTest.push(Donation.array[i].name);
    }

    if (!arrayTest.includes(name)) {
      new Donation(name, age, gender, weight, city, address, bloodType, avail1, avail2, mobile); // add here the values from the forms in order to creat a new instance.

    } else if (arrayTest.includes(name)) {
      Donation.array.find(isName).frequency++; // The find() method returns the object of which its name is equal to the provided value in the function.

      // eslint-disable-next-line no-inner-declarations
      function isName(person){
        return person.name === name;
      }
    }
  } else {
    new Donation(name, age, gender, weight, city, address, bloodType, avail1, avail2, mobile);
  }

  storeDonors();


}



function leaderBoardNames(){
  
}







//Beyond this line is for localStorage functions

function storeDonors() {

  localStorage.setItem('arrayDonors', JSON.stringify(Donation.array));

}

function grabDonors() {

  let storedDonArr = JSON.parse(localStorage.getItem('arrayDonors'));
  return storedDonArr;
}