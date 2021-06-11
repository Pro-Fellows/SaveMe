'use strict';

let formElement = document.getElementById('formID'); // Add the

Donation.array = [];

function Donation(name,age,gender,weight,city,address,bloodType,avail,phone,anonymous){ // Don't forget to change the variables as the form

  this.name = name;
  this.age = age;
  this.gender = gender;
  this.weight = weight;
  this.city = city;
  this.address = address;
  this.bloodType = bloodType;
  this.avail = avail;
  this.phone = phone;
  this.anony = anonymous;

  Donation.array.push(this);

}

grabDonors();


// formElement.addEventListener('submit', submitHandling); // this is the form submit handling event.

function submitHandling(event){
//   event.preventDefault();

  new Donation('osaid',23,'male',72,'Maan','engineers st/ building#9','O+','thur-sat','0777437637',true); // add here the values from the forms in order to creat a new instance.

  storeDonors();
  // Put Ghadder's work here to compare and add #times

}

submitHandling();
















//Beyond this line is for localStorage functions

function storeDonors(){

  localStorage.setItem('arrayDonors',JSON.stringify(Donation.array));

}

function grabDonors(){

  let storedDonArr = JSON.parse(localStorage.getItem('arrayDonors'));
  return storedDonArr;
}