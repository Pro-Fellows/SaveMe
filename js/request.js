/* eslint-disable no-redeclare */
'use strict';

let formEl = document.getElementById('requestForm');
let cardsCont = document.getElementById('cardsContainer');

RequestBlood.allFields = [];

function RequestBlood(name, age, gender, city, phoneNumber, bloodType, unitNumber, frequency, caseStatus) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.city = city;
  this.phoneNumber = phoneNumber;
  this.bloodType = bloodType;
  this.unitNumber = unitNumber;
  this.frequency = frequency;
  this.caseStatus = caseStatus;

  RequestBlood.allFields.push(this);

  setData();

}

let arrayDonors = grabDonors();



formEl.addEventListener('submit', handleSubmitting);

function handleSubmitting(event) {

  event.preventDefault();

  let newName = event.target.nameField.value;
  let newAge = event.target.ageField.value;
  let newGender = event.target.genderField.value;
  let newCity = event.target.cityField.value;
  let newNumber = event.target.phoneField.value;
  let newType = event.target.bloodField.value;
  let newUnits = event.target.unitsField.value;
  let newFreq = event.target.frequencyField.value;
  let newCase = event.target.caseField.value;

  new RequestBlood(newName, newAge, newGender, newCity, newNumber, newType, newUnits, newFreq, newCase);
  console.log(newType);
  getDonorBlood(newType);
  getData();
}


let extractedDonorsArray = [];

for (let m = 0; m < arrayDonors.length; m++) {
  let obj = { 'name': arrayDonors[m].name, 'bloodType': arrayDonors[m].bloodType, 'city': arrayDonors[m].city, 'phone': arrayDonors[m].phone };
  extractedDonorsArray.push(obj);
}




function getDonorBlood(newType) { // This function will check for the compatible blood types with the requested blood type and render them on the page.

  if (newType === 'O-') {
    let oNegative = extractedDonorsArray.filter(a => a.bloodType === 'O-');
    renderCards(oNegative);

  } else if (newType === 'O+') {
    let oPostive = extractedDonorsArray.filter(a => a.bloodType === 'O-' || a.bloodType === 'O+');
    renderCards(oPostive);

  } else if (newType === 'A-') {
    let aNegative = extractedDonorsArray.filter(a => a.bloodType === 'O-' || a.bloodType === 'A-');
    renderCards(aNegative);

  } else if (newType === 'A+') {
    let aPostive = extractedDonorsArray.filter(a => a.bloodType === 'O-' || a.bloodType === 'O+' || a.bloodType === 'A-' || a.bloodType === 'A+');
    renderCards(aPostive);

  } else if (newType === 'B-') {
    let bNegative = extractedDonorsArray.filter(a => a.bloodType === 'O-' || a.bloodType === 'B-');
    renderCards(bNegative);

  } else if (newType === 'B+') {
    let bPostive = extractedDonorsArray.filter(a => a.bloodType === 'O-' || a.bloodType === 'O+' || a.bloodType === 'B-' || a.bloodType === 'B+');
    renderCards(bPostive);

  } else if (newType === 'AB-') {
    let abNegative = extractedDonorsArray.filter(a => a.bloodType === 'O-' || a.bloodType === 'A-' || a.bloodType === 'B-' || a.bloodType === 'AB-');
    renderCards(abNegative);

  } else if (newType === 'AB+') {
    let abPostive = extractedDonorsArray.filter(a => a.bloodType === 'O-' || a.bloodType === 'O+' || a.bloodType === 'A-' || a.bloodType === 'A+' || a.bloodType === 'B-' || a.bloodType === 'B+' || a.bloodType === 'AB-' || a.bloodType === 'AB+');
    renderCards(abPostive);
  }


}



function renderCards(array) {

  for (let i = 0; i < array.length; i++) {

    let divEl = document.createElement('div');
    divEl.setAttribute('class', 'card');
    cardsCont.appendChild(divEl);

    let h1El = document.createElement('h2');
    divEl.appendChild(h1El);
    h1El.textContent = `The donar name is: ${array[i].name}`;

    let h2El = document.createElement('h3');
    divEl.appendChild(h2El);
    h2El.textContent = `The blood type is: ${array[i].bloodType}`;

    h2El = document.createElement('h3');
    divEl.appendChild(h2El);
    h2El.textContent = `The donar lives in: ${array[i].city}`;

    h2El = document.createElement('h3');
    divEl.appendChild(h2El);
    h2El.textContent = `The phone number is: ${array[i].phone}`;

  }

}







// beyond this is for storage

function setData() {

  let stringArray = JSON.stringify(RequestBlood.allFields);

  localStorage.setItem('Data', stringArray);

}


function getData() {

  let values = localStorage.getItem('Data');

  if (values) {
    RequestBlood.allField = JSON.parse(values);
  }
}



function grabDonors() {

  let storedDonArr = JSON.parse(localStorage.getItem('arrayDonors'));
  return storedDonArr;
}
