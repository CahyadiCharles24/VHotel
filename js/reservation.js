let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


function validate() {
    let title = document.getElementById('input-title').value;
    let fname = document.getElementById('input-fname').value;
    let lname = document.getElementById('input-lname').value;
    let email = document.getElementById('input-email').value;
    let phone = document.getElementById('input-num').value;
    let jumlah = document.getElementById('input-quantity').value;
    let idate = new Date(document.getElementById('input-idate').value);
    let odate = new Date(document.getElementById('input-odate').value);

    let isValid = true;

    if (!valTitle(title)) {
        isValid = false;
    }

    if (!valName(fname, "First name", 3)) {
        isValid = false;
    }

    if (!valName(lname, "Last name", 3)) {
        isValid = false;
    }

    if (!valEmail(email)) {
        isValid = false;
    }

    if (!valPhone(phone)) {
        isValid = false;
    }

    if(!valquan(jumlah)){
        isValid = false;
    }

    if(!valdate(idate, odate)){
        isValid = false;
    }

    if (isValid) {
        console.log("Form submitted successfully");
        location.reload();
    }
}

function valTitle(title) {
    if (title === "") {
        alert("Please enter a title.");
        return false;
    }
    return true;
}

function valName(name, field, minLength) {
    if (name.length < minLength) {
        alert(`${field} should be more than ${minLength} characters.`);
        return false;
    }
    return true;
}

function valEmail(email) {
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}

function valPhone(phone) {
    if (!Number.isInteger(Number(phone))) {
        alert("Please enter a valid phone number.");
        return false;
    }
    return true;
}

function valquan(jumlah){
    if(jumlah < 1 || jumlah > 9){
        alert("Room Qunatity Minimum 1 and Maximum 9");
        return false;
    }
    return true;
}

function valdate(idate, odate){
    if(idate > odate){
        alert("Please Input valid Check-In and Check-Out Date");
        return false;
    }
    return true;
}

document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault();
    validate();
});
