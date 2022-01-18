const GITHUB_URL = "https://api.github.com/users/Giltr749";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const myName = document.getElementById(`myName`);
    myName.textContent = data.login;
  });

function $(x) {
  return document.getElementById(x);
}

const langs = ["HTML", "CSS", "JavaScript"];
let used = $(`built`).textContent;

for(let i=0; i<=(langs.length-1); i++){
  if (i === langs.length-1)
    used += `and `;
  used += (langs[i]+` `);;
}

$(`built`).textContent = used ;


langs.join();