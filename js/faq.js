
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable indent */
'user strict';
let getForm = document.getElementById('EnquiryForm');
let questionsCard = document.getElementById('showQuestions');
let enquiryArr = [];
function showForm() {
    document.getElementById('EnquiryForm').style.display = 'block';
}


function enquiryForm(firstName, lastName, email, mobileNumber, enquiryType, subject, enquiryCase) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobileNumber = mobileNumber;
    this.enquiryType = enquiryType;
    this.subject = subject;
    this.enquiryCase = enquiryCase;

    enquiryArr.push(this);
    setEnquiry();
}

getEnquiry();



getForm.addEventListener('submit', enquirySubmit);

function enquirySubmit(event) {
    event.preventDefault();
    let newFirstName = event.target.FirstnameField.value;
    let newLastName = event.target.LastnameField.value;
    let newemail = event.target.EmailField.value;
    let newmobile = event.target.MobileNumberField.value;
    let newenquiryType = event.target.EnquiryField.value;
    let newsubject = event.target.subjectField.value;
    let newenquiryCase = event.target.EnquiryCaseField.value;

    new enquiryForm(newFirstName, newLastName, newemail, newmobile, newenquiryType, newsubject, newenquiryCase);
    getEnquiry();
    console.log(enquiryArr);

    showQ();
}

function setEnquiry() {
    let stringArray = JSON.stringify(enquiryArr);
    localStorage.setItem('EnquiryData', stringArray);
}

function getEnquiry() {
    let values = localStorage.getItem('EnquiryData');
    if (values) {
        enquiryArr = JSON.parse(values);
    }
}


function showQ() {

    document.getElementById('EnquiryForm').style.display = 'none';
    // let questionsArr = [];
    // if (localStorage.getItem('QuestionData')) {
    //     questionsArr = JSON.parse(localStorage.getItem('QuestionData'));
    // eslint-disable-next-line no-empty
    let hEl = document.createElement('h2');
    let pEl2 = document.createElement('p');
    for (let i = 0; i < enquiryArr.length; i++) {
        // let objectsQuestions = {
        //     firstName: enquiryArr[i].firstName,
        //     lastName: enquiryArr[i].lastName,
        //     case: enquiryArr[i].enquiryCase
        // };
        // questionsArr.push(objectsQuestions);
        // localStorage.setItem('QuestionData', JSON.stringify(questionsArr));

        hEl;
        if (hEl.textContent === ` ${enquiryArr[i].firstName} ${enquiryArr[i].lastName} asked:`) {
            continue;
        }
        hEl.textContent = ` ${enquiryArr[i].firstName} ${enquiryArr[i].lastName} asked:`;
        questionsCard.appendChild(hEl);
        pEl2;
        if (pEl2.textContent === `${enquiryArr[i].enquiryCase}`) {
            continue;
        }
        questionsCard.appendChild(pEl2);
        pEl2.textContent = `${enquiryArr[i].enquiryCase}`;

    }
}

function showQ2() {
    document.getElementById('EnquiryForm').style.display = 'none';
    for (let i = 0; i < enquiryArr.length; i++) {
        let hEl = document.createElement('h2');
        hEl.textContent = ` ${enquiryArr[i].firstName} ${enquiryArr[i].lastName} asked:`;
        questionsCard.appendChild(hEl);
        let pEl2 = document.createElement('p');
        questionsCard.appendChild(pEl2);
        pEl2.textContent = `${enquiryArr[i].enquiryCase}`;
    }
}

showQ2();
