'use strict';

let formElement = document.getElementById('');

let Donation.array = [];

let Donation = function(name,age,gender,weight,city,address,bloodType,avail,phone,anonymous){   // Don't forget to change the variables as the form

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

storeDonors();



formElement.addEventListener('submit', submitHandling);    // this is the form submit handling event.

function submitHandling(event){
    event.preventDefault();

    new Donation();    // add here the values from the forms in order to creat a new instance.

}








Donation.array = grabDonors();




//Beyond this line is for localStorage functions

function storeDonors(){

localStorage.setItem('arrayDonors',JSON.stringify(Donation.array));

}

function grabDonors(){

    let storedDonArr = JSON.parse(localStorage.getItem('arrayDonors'));
    return storedDonArr;
    }