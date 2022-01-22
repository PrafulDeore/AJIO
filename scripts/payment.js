let totalAmt = JSON.parse(localStorage.getItem("total_bag")) || {};

document.getElementById("btnPayment").addEventListener("click", () => {
    let cardNum = document.getElementById("cardNum").value;
    let cusName = document.getElementById("nameOncard").value;
    let forcvv = document.getElementById("forcvv").value;
    if (cardNum.length != 16 && cusName.length == 0 && forcvv.length == 0) {
        alert("Please Enter Valid Card Details");
    } else if (
        cardNum.length == 16

    ) {
        // alert("hi");
        window.location.href = "./summaryPage.html";
    }
});
document.getElementById("bagt").innerHTML = `Rs ${totalAmt.total_bag.toFixed(
    2
)}`;
document.getElementById("bags").innerHTML = `- Rs ${totalAmt.total_save.toFixed(
    2
)}`;
document.getElementById("bagp").innerHTML = `Rs ${totalAmt.total_price.toFixed(
    2
)}`;
document.getElementById("bagp1").innerHTML = `Rs ${totalAmt.total_price.toFixed(
    2
)}`;
document.getElementById('btnPayment').innerHTML = `PAY Rs. ${totalAmt.total_price.toFixed(
    2
)} SECURELY`