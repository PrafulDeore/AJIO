var modelBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

modelBtn.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');
})







document.querySelector("#save").addEventListener("click",addAddress);


var arr = []

function addAddress(event){
    event.preventDefault();
    //console.log("address");
    
    var name = document.querySelector("#name").value;
    var mob = document.querySelector("#mob").value;
    var pin = document.querySelector("#pin").value;
    var  locality = document.querySelector("#locality").value;
    var distt = document.querySelector("#distt").value;
    var state = document.querySelector("#state").value;



    console.log(name,mob,pin,locality,distt, state);

    var  addressShip = {
        name: name,
        mob:mob,
        pin:pin,
        locality:locality,
        distt:distt,
        state:state
    };
    arr.push(addressShip);
    
    localStorage.setItem("addressList",JSON.stringify(arr));

     window.location.href = "shiping.html";

    
}
