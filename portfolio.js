
//----------------------- HOME -------------------------//

const GITHUB_URL = "https://api.github.com/users/Giltr749";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });