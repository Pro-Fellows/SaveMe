/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
'user strict';
let getForm = document.getElementById('EnquiryForm');
let questionsCard = document.getElementById('showQuestions');
let pEl = document.createElement('p');
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
    let questionsArr = [];
    // eslint-disable-next-line no-empty
    for (let i = 0; i < enquiryArr.length; i++) {
        let objectsQuestions = {
            firstName: enquiryArr[i].firstName,
            lastName: enquiryArr[i].lastName,
            case: enquiryArr[i].enquiryCase
        };
        questionsArr.push(objectsQuestions);
        //     for(let j = 0; j<=contentArray.length; j++){
        questionsCard.textContent = ` ${enquiryArr[i].firstName} ${enquiryArr[i].lastName} asked:`;
        questionsCard.appendChild(pEl);
        pEl.textContent = `${enquiryArr[i].enquiryCase}`;
        // }
        console.log(questionsArr);
    }
}
