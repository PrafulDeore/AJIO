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
