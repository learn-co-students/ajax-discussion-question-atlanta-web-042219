const profilePicture = document.getElementById('profile_picture');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const postCode = document.getElementById('postcode');
const phone = document.getElementById('phone');
const cell = document.getElementById('cell');
const dob = document.getElementById('date_of_birth');
const button = document.querySelector('button');

document.addEventListener("DOMContentLoaded", () => {
  // console.log("CONTENT LOADED!");
  button.addEventListener("click", getData)
});

function getData() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(json => userData(json.results[0]))
    .catch(err => console.log(err));
}

function userData(json){
  fullName.innerText = `${json.name.title} ${json.name.first} ${json.name.last}`;
  profilePicture.src = json.picture.large;
  email.innerText = json.email;
  street.innerText = json.location.street;
  city.innerText = json.location.city;
  state.innerText = json.location.state;
  postCode.innerText = json.location.postcode;
  phone.innerText = json.phone;
  cell.innerText = json.cell;
  dob.innerText = json.dob.date;
}
