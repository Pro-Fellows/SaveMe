let arrOfObjects = [];
let gobalVar = document.getElementById('orderedList')

function rating (name, timesOfDonation){
    this.name = name;
    this.timesOfDonation = timesOfDonation;


    arrOfObjects.push(this)
}

let Ahmad = new rating('Ahmad', 2);
let Osaid = new rating ('Osaid', 3);
let Nader  = new rating ('Nader', 4);
let Sameer = new rating ('Sameer', 5);
let Salem = new rating ('Salem', 6);


rating.prototype.render = function(){

    let list = document.createElement('ol');
    gobalVar.appendChild(list);
    


}

Ahmad.render();
Osaid.render();
Nader.render();
Sameer.render();
Salem.render();


const donationForm = document.getElementById('form');
donationForm.addEventListener('submit', applicants);

function applicants(event){
    event.preventDefault();

let applicantName = event.target.name.value;
let applicanttimes = event.target.timesOfDonation.value;

let info = new rating (applicantName, applicanttimes);


info.render();


}




