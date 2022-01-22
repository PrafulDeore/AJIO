let bag_arr = JSON.parse(localStorage.getItem('bagItems')) || [];
bag_arr.map((ele) => {
    let div = document.createElement('div');
    div.setAttribute('class', 'ordered_items_div')
    let img = document.createElement('img');
    img.src = ele.image.img1;
    let pro_name = document.createElement('p');
    pro_name.innerHTML = `${ele.name}-<span>${ele.details}</span>`;
    div.append(img, pro_name);
    document.getElementById('ordered_items').append(div);
})


var modelBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

modelBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
})


let bag_t = JSON.parse(localStorage.getItem('total_bag')) || {};
document.getElementById('bagt').innerHTML = `Rs. ${bag_t.total_bag.toFixed(2)}`;
document.getElementById('bags').innerHTML = `Rs. ${bag_t.total_save.toFixed(2)}`;
document.getElementById('bagp').innerHTML = `Rs. ${bag_t.total_price.toFixed(2)}`;





document.querySelector("#save").addEventListener("click", addAddress);

var arr = []

function addAddress(event) {
    event.preventDefault();
    //console.log("address");

    var name = document.querySelector("#name").value;
    var mob = document.querySelector("#mob").value;
    var pin = document.querySelector("#pin").value;
    var locality = document.querySelector("#locality").value;
    var distt = document.querySelector("#distt").value;
    var state = document.querySelector("#state").value;



    console.log(name, mob, pin, locality, distt, state);

    var addressShip = {
        name: name,
        mob: mob,
        pin: pin,
        locality: locality,
        distt: distt,
        state: state
    };
    arr.push(addressShip);

    localStorage.setItem("addressList", JSON.stringify(arr));

    window.location.href = "shiping.html";


}
