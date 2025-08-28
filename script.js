let form1 = document.querySelector(".form1");
let form2 = document.querySelector(".form2");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let loginInputs = document.getElementsByClassName("loginInput");
let myclass = document.getElementsByClassName("myclass");
let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");

let passwordInput = myclass[5];      
let confirmPasswordInput = myclass[6]; 
let PasswordInput = loginInputs[2];  

let users = JSON.parse(localStorage.getItem("registeredUser")) || [];


btn2.addEventListener("click", (evt) => {
  evt.preventDefault();
  form2.style.display = "flex";
  form1.style.display = "none";
});


btn1.addEventListener("click", (evt) => {
  evt.preventDefault();

  let FirstName = myclass[0].value.trim();
  let MiddleName = myclass[1].value.trim();
  let lastname = myclass[2].value.trim();
  let Username = myclass[3].value.trim();
  let Email = myclass[4].value.trim();
  let password = myclass[5].value.trim();
  let ConfirmPassword = myclass[6].value.trim();

  if (
    FirstName === "" ||
    MiddleName === "" ||
    lastname === "" ||
    Username === "" ||
    Email === "" ||
    password === "" ||
    ConfirmPassword === ""
  ) {
    alert("Please Fill The Form First!!");
    return;
  }


  const isFirstNameValid = FirstName.length >= 4 && FirstName.length <= 10 &&  FirstName.charAt(0) === FirstName.charAt(0).toUpperCase() && FirstName.slice(1) === FirstName.slice(1).toLowerCase();

  const isMiddleNameValid = MiddleName.length >= 3 && MiddleName.length <= 10 &&  MiddleName.charAt(0) === MiddleName.charAt(0).toUpperCase() && MiddleName.slice(1) === MiddleName.slice(1).toLowerCase();
  
  const isLastNameValid = lastname.length >= 4 && lastname.length <= 10 &&  lastname.charAt(0) === lastname.charAt(0).toUpperCase() && lastname.slice(1) === lastname.slice(1).toLowerCase();


  const isusernameValid =
    Username.length >= 10 &&
    (Username.includes("@") ||
      Username.includes("_") ||
      Username.includes("-") ||
      Username.includes("."));

  const ispasswordValid = password.length >= 8 && password.includes("@");
  const isemailvalid = Email.includes("@") && Email.includes("gmail.com");


    if (!isFirstNameValid) {
    alert("Invalid FirstName!!");
    return;
  }

    if (!isMiddleNameValid) {
    alert("Invalid MiddleName!!");
    return;
  }

    if (!isLastNameValid) {
    alert("Invalid LastName!!");
    return;
  }

  if (!isusernameValid) {
    alert("Invalid Username!!");
    return;
  }

  if (!ispasswordValid) {
    alert("Invalid Password!!");
    return;
  }

  if (!isemailvalid) {
    alert("Invalid Email!!");
    return;
  }

  if(ConfirmPassword !== password)
  {
    alert("confirm Password is not equal to Password!!!")
  }


 const userExists = users.some((u) => u.Username === Username);
  if (userExists) {
    alert("Username already taken.");
    return;
  }

  const newUser = {
    FirstName,
    MiddleName,
    lastname,
    Username,
    Email,
    password
  };

  users.push(newUser);
  localStorage.setItem("registeredUser", JSON.stringify(users));

  alert("Registration Successful!");
  check1.checked = false;
check2.checked = false;
check3.checked = false;

passwordInput.type = "password";
confirmPasswordInput.type = "password";
PasswordInput.type = "password";

  window.location.href = "https://www.google.com";

  myclass[0].value = "";
  myclass[1].value = "";
  myclass[2].value = "";
  myclass[3].value = "";
  myclass[4].value = "";
  myclass[5].value = "";
  myclass[6].value = "";
});



btn3.addEventListener("click", (evt)=>{
    evt.preventDefault();

    
  let Username = loginInputs[0].value.trim();
  let Email = loginInputs[1].value.trim();
  let Password = loginInputs[2].value.trim();

  if (Username === "" || Email === "" || Password === "") {
    alert("Please Fill The Form First!!");
    return;
  }

  const isusernameValid =
    Username.length >= 10 &&
    (Username.includes("@") || Username.includes("_") || Username.includes("-") || Username.includes("."));

  const ispasswordValid = Password.length >= 8 && Password.includes("@");
  const isemailvalid = Email.includes("@") && Email.includes("gmail.com");

  if (!isusernameValid) {
    alert("Invalid Username!!");
    return;
  } 
  else if (!ispasswordValid) {
    alert("Invalid Password!!");
    return;
  }
   else if (!isemailvalid) {
    alert("Invalid Email!!");
    return;
  } 
  else {

  const storedUsers = JSON.parse(localStorage.getItem("registeredUser")) || [];

  const matchedUser = storedUsers.find(
    (user) =>
      user.Username === Username &&
      user.Email === Email &&
      user.password === Password
  );

  if (matchedUser) 
  {
    alert("Login Successful!");
  check1.checked = false;
  check2.checked = false;
   check3.checked = false;

passwordInput.type = "password";
confirmPasswordInput.type = "password";
PasswordInput.type = "password";

    window.location.href = "https://www.google.com";
  } 
  else 
  {
    alert("Invalid login // Register First.");
  }
  }

  for (let i = 0; i < loginInputs.length; i++) {
    loginInputs[i].value = "";
  }
});


check2.addEventListener("change", () => {
  if (check2.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});


check1.addEventListener("change", () => {
  if (check1.checked) {
    confirmPasswordInput.type = "text";
  } else {
    confirmPasswordInput.type = "password";
  }
});


check3.addEventListener("change", () => {
  if (check3.checked) {
    PasswordInput.type = "text";
  } else {
    PasswordInput.type = "password";
  }
});


check1.checked = false;
check2.checked = false;
check3.checked = false;
