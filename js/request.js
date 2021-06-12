'use strict';

let formEl = document.getElementById('requestForm');
Request.allFields = [];

function Request(name, age, gender, city, phoneNumber, bloodType, unitNumber, frequency, caseStatus){
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.city = city;
  this.phoneNumber = phoneNumber;
  this.bloodType = bloodType;
  this.unitNumber = unitNumber;
  this.frequency = frequency;
  this.caseStatus = caseStatus;

  Request.allFields.push(this);

  setData();

}


formEl.addEventListener('submit',handleSubmitting);

function handleSubmitting(event){

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

  new Request(newName, newAge, newGender, newCity, newNumber, newType, newUnits, newFreq, newCase);

  getData();
}


function setData(){

  let stringArray = JSON.stringify(Request.allFields);

  localStorage.setItem('Data', stringArray);

}


function getData(){

  let values = localStorage.getItem('Data');

  if(values){
    Request.allField = JSON.parse(values);
  }
}