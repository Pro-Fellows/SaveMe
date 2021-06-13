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

  getDonorBlood(newType);
  getData();
  // available();
}


let extractedDonorsArray = [];

for (let m = 0; m < arrayDonors.length; m++) {
  let obj = { 'name': arrayDonors[m].name, 'bloodType': arrayDonors[m].bloodType, 'city': arrayDonors[m].city, 'phone': arrayDonors[m].phone };
  extractedDonorsArray.push(obj);
}

console.log(extractedDonorsArray);

// Name , BT , Phone Number , City


// function available(x){

//   let liEl = document.createElement('li');
//   ulEl.appendChild(liEl);
//   liEl.textContent = extractedDonorsArray[0].name ;

// }






function getDonorBlood(newType) {

  if (newType === 'O-') {
    let oNegative = extractedDonorsArray.filter(a => a.bloodType === 'O-');
    // console.log(oNegative);

    for(let i=0;i<oNegative.length;i++){

      let name = oNegative[i].name;
      let bloodType = oNegative[i].bloodType;
      let city = oNegative[i].city;
      let phone = oNegative[i].phone;

      let divEl = document.createElement('div');
      divEl.setAttribute('class','card');
      cardsCont.appendChild(divEl);

      let h1El = document.createElement('h1');
      divEl.appendChild(h1El);
      h1El.textContent = `The donar name is: ${name}`;

      let h2El = document.createElement('h2');
      divEl.appendChild(h2El);
      h2El.textContent = `The blood type is: ${bloodType}`;

      h2El = document.createElement('h2');
      divEl.appendChild(h2El);
      h2El.textContent = `The donar lives in: ${city}`;

      h2El = document.createElement('h2');
      divEl.appendChild(h2El);
      h2El.textContent = `The phone number is: ${phone}`;

    }


  } else if (newType === 'O+') {
    let oPostive = extractedDonorsArray.filter(a => a.bloodType === 'O-' || a.bloodType === 'O+');
    console.log(oPostive);
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
