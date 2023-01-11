const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

let firstPara = document.getElementById("firstPara");
let secondPara = document.getElementById("secondPara");
let thirdPara = document.getElementById("thirdPara");
let fourthPara = document.getElementById("fourthPara");

form.addEventListener("submit",(e) => {

 e.preventDefault();
    var fNameValue = fName.value.trim();
    var lNameValue = lName.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if (fNameValue === ""){
       firstPara.style.display = "block"
    }
    if (lNameValue === ""){
       secondPara.style.display = "block"
    }
    if (emailValue === ""){
       thirdPara.style.display = "block"
    }
    if (passwordValue === ""){
       fourthPara.style.display = "block"
    }

    
})
