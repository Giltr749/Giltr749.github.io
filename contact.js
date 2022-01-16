const subBtn = document.getElementById(`submit`);

let knowmethod;




document.addEventListener(`click`, function(){
    if (document.getElementById(`fname`).value.length === 0 || document.getElementById(`email`).value.length === 0 || document.getElementById(`know`).value === ``){
        subBtn.disabled = true;
    }
    else {
        subBtn.disabled = false;
    }

    if (document.getElementById(`know`).value === `friend`){
        knowmethod = `You heard of me from a friend or a family member`
    }
    else if (document.getElementById(`know`).value === `social`) {
        knowmethod = `You know me from social media`
    }
    else if (document.getElementById(`know`).value === `ads`) {
        knowmethod = `You saw me in an advertisment`
    }
    else if (document.getElementById(`know`).value === `itc`) {
        knowmethod = `You know me from the ITc Fullstack Precourse`
    }

});


subBtn.addEventListener(`click`, function(){
    
    console.log(`First Name: ` + document.getElementById(`fname`).value);
    
    if (document.getElementById(`lname`).value === ``){
        console.log(`You didn't share you last name.`);
    }
    else {
        console.log(`Last Name: ` + document.getElementById(`lname`).value);
    }    
    
    console.log(`Email: ` + document.getElementById(`email`).value);

    console.log(knowmethod + `, `)

    console.log(`You think my website is ` + document.querySelector(`input[name="rate"]:checked`).value +`.`);

    if (document.getElementById(`comments`).value === ``){
        console.log(`You don't want to share anything else.`);
    }
    else {
        console.log(`You left a comment: ` + document.getElementById(`comments`).value+`.`);
    }

    if (document.getElementById(`back`).checked === true) {
        console.log (`I will contact you at ` + document.getElementById(`email`).value);
    }
    else {
        console.log(`You requested that I don't contact you.`)
    }
});