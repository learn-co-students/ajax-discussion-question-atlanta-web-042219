const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(json => userData(json))
  .catch(err => console.log(err));

function userData(json){
  console.log("userData data", json);
  // fullname.innerText = json.
}

userData;



// function addNewBreed(breed){
//   const breed_list = document.querySelector('#dog-breeds')
//   const li = document.createElement('li')
//   li.innerText = breed
//   breed_list.appendChild(li)
// }
