document.getElementById("ajioLogo").addEventListener("click", () => {
  window.location.href = "index.html";
  console.log("hu");
});
// go to closest
document.getElementById("hangerImg").addEventListener("click", () => {
  window.location.href = "closet.html";
});

// to bag
document.getElementById("bagImg").addEventListener("click", () => {
  window.location.href = "bag.html";
});

let dropDownMens = document.getElementById("toDisplaymen");
let mainDiv = document.getElementById("toDisplaywomen1");

dropDownMens.addEventListener("mouseover", function () {
  document.getElementById("toDisplaymen1").style.display = "block";
});
dropDownMens.addEventListener("mouseout", function () {
  document.getElementById("toDisplaymen1").style.display = "none";
});

let dropDownWomens = document.getElementById("toDisplaywomen");
dropDownWomens.addEventListener("mouseover", function () {
  document.getElementById("toDisplaywomen1").style.display = "block";
});
dropDownWomens.addEventListener("mouseout", function () {
  document.getElementById("toDisplaywomen1").style.display = "none";
});

let dropDownKids = document.getElementById("toDisplaykids");
dropDownKids.addEventListener("mouseover", function () {
  document.getElementById("toDisplaykids1").style.display = "block";
});
dropDownKids.addEventListener("mouseout", function () {
  document.getElementById("toDisplaykids1").style.display = "none";
});

let indie = document.getElementById("indie");
indie.addEventListener("mouseover", function () {
  document.getElementById("indie1").style.display = "block";
});
indie.addEventListener("mouseout", function () {
  document.getElementById("indie1").style.display = "none";
});

let HandM = document.getElementById("handm");
HandM.addEventListener("mouseover", function () {
  document.getElementById("handm1").style.display = "block";
});
HandM.addEventListener("mouseout", function () {
  document.getElementById("handm1").style.display = "none";
});

document.getElementById("searchajio").addEventListener("click", function () {
  document.getElementById("searchresult").style.display = "block";
});

// FOR SIGN UP POP UP
document.getElementById("signInJoin").addEventListener("click", function () {
  document.getElementById("forSignup").style.display = "block";
});

// FOR CLOSING
document.getElementById("crossImg").addEventListener("click", () => {
  document.getElementById("forSignup").style.display = "none";
});

// to display input
document.getElementById("forInput").addEventListener("click", () => {
  document.getElementById("forInput").style.borderBottomColor = "#d5a249";
});

// on continue

document.getElementById("forSignUpbtn").addEventListener("click", () => {
  let dataToSend = document.getElementById("forInput").value;

  //   LOCAL STORAGE.............................................................................................
  localStorage.setItem("mobNum", JSON.stringify(dataToSend));
  document.getElementById("forSignup").style.display = "none";

  //   gotta write code for signup display
  document.getElementById("forSignup1").style.display = "block";
  let data = JSON.parse(localStorage.getItem("mobNum"));
  console.log(data);
  document.getElementById("todisplayNum").innerHTML = data;
});
// for closing the details
document.getElementById("crossImg1").addEventListener("click", () => {
  document.getElementById("forSignup1").style.display = "none";
});
// for color change
document.getElementById("forInputName").addEventListener("click", () => {
  document.getElementById("forInputName").style.borderBottomColor = "#d5a249";
});

document.getElementById("forInputEmail").addEventListener("click", () => {
  document.getElementById("forInputEmail").style.borderBottomColor = "#d5a249";
});

document.getElementById("forPassword").addEventListener("click", () => {
  document.getElementById("forPassword").style.borderBottomColor = "#d5a249";
});

document.getElementById("optionalF").addEventListener("click", () => {
  document.getElementById("optionalF").style.borderBottomColor = "#d5a249";
});

document.getElementById("forOtp").addEventListener("click", () => {
  document.getElementById("forOtp").style.borderBottomColor = "#d5a249";
});

//
document.getElementById("sendOtp").addEventListener("click", () => {
  let randomToDis = Math.floor(Math.random() * 200 + 1000);
  let nameOFCx = document.getElementById("forInputName").value;
  let obj = {
    otp: randomToDis,
    name: nameOFCx,
  };
  localStorage.setItem("randomN", JSON.stringify(obj));
  console.log(randomToDis);
  document.getElementById("forSignup1").style.display = "none";
  document.getElementById("forSignup2").style.display = "block";
  alert(randomToDis);
});

// CONFIRMING
document.getElementById("confirmOTP").addEventListener("click", () => {
  let otpVerification = JSON.parse(localStorage.getItem("randomN"));

  let customerOTP = document.getElementById("forOtp").value;
  console.log(otpVerification.otp);
  console.log(customerOTP);
  if (otpVerification.otp == customerOTP) {
    document.getElementById(
      "displayCxName"
    ).innerHTML = `Hi ${otpVerification.name}`;
    document.getElementById("forSignup2").style.display = "none";
  } else {
    alert("OTP incorrect");
  }
});

// cancle function for cross button
document.getElementById("loginClose2").addEventListener("click", () => {
  document.getElementById("forSignup2").style.display = "none";
});
