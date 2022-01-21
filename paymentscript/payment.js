document.getElementById("btnPayment").addEventListener("click", () => {
  let cardNum = document.getElementById("cardNum").value;
  let cusName = document.getElementById("nameOncard").value;
  let forcvv = document.getElementById("forcvv").value;
  if (cardNum.length != 16 && cusName.length == 0 && forcvv.length == 0) {
    alert("Please Enter Valid Card Details");
  } else if (
    cardNum.length == 16 &&
    cusName.length != 0 &&
    forcvv.length != 0
  ) {
    // alert("hi");
    window.location.href = "";
  }
});
