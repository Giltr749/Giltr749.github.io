const GITHUB_URL = "https://api.github.com/users/IsraelTechChallengeITC";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });



// ------------------- MAPS --------------------- //

const srcs = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26834.8738914055!2d35.51154036898919!3d32.78273281254194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c3e4505b6d063%3A0xf6f4a023d4faf69f!2sTiberias!5e0!3m2!1sen!2sil!4v1641900108376!5m2!1sen!2sil",

  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27047.2349751655!2d34.80879391821973!3d32.07183511217572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c86e794e4ad%3A0x2d00bf3ee717526f!2sRamat%20Gan!5e0!3m2!1sen!2sil!4v1641900250684!5m2!1sen!2sil",

  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54568.4348626958!2d34.75586759014464!3d31.261509922369484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15026640029f8777%3A0x8dee8012deb5dd8!2sBe&#39;er%20Sheva!5e0!3m2!1sen!2sil!4v1641901759724!5m2!1sen!2sil",

  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54084.90495522218!2d34.76222659367275!3d32.08799940299241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1641901959173!5m2!1sen!2sil",

  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13523.834095619814!2d34.8005496894477!3d32.07037053227832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bba478c09a7%3A0x876720020e35c8f7!2sGiv&#39;atayim!5e0!3m2!1sen!2sil!4v1641901998859!5m2!1sen!2sil" 
];

const map = document.getElementById(`map`);
let currentlySelected = 0;
const prevBtn = document.querySelector(`.prev`);
const nextBtn = document.querySelector(`.next`);

nextBtn.addEventListener(`click`, function(){
  currentlySelected++;
  map.src = srcs[currentlySelected];
  prevBtn.disabled = false;

  if(srcs.length === currentlySelected+1)
  nextBtn.disabled = true;
});

prevBtn.addEventListener(`click`, function(){
  currentlySelected--;
  map.src = srcs[currentlySelected];
  nextBtn.disabled = false;

  if (currentlySelected === 0){
      prevBtn.disabled = true;
  }
});
