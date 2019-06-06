const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetchPerson()
  const btn = document.querySelector('button')
  btn.addEventListener('click', fetchPerson)
});

function fetchPerson(){
  return fetch("https://randomuser.me/api/")
    .then(resp => resp.json())
    .then(json => addPerson(json.results[0]))
}

function addPerson(person){
  const img = document.querySelector("#profile_picture")
  const name = document.querySelector("#fullname")
  const email = document.querySelector("#email")
  const street = document.querySelector("#street")
  const city = document.querySelector("#city")
  const state = document.querySelector("#state")
  const postcode = document.querySelector("#postcode")
  const phone = document.querySelector("#phone")
  const cell = document.querySelector("#cell")
  const dob = document.querySelector("#date_of_birth")
  console.log(person)
  img.src = person.picture.thumbnail
  name.innerText = `${person.name.title} ${person.name.first} ${person.name.last}`
  email.innerText = person.email
  street.innerText = person.location.street
  city.innerText = person.location.city
  state.innerText = person.location.state
  postcode.innerText = person.location.postcode
  phone.innerText = person.phone
  cell.innerText = person.cell
  dob.innerText = person.dob.date
}