<<<<<<< Updated upstream
var closet = JSON.parse(localStorage.getItem("closetItems"));
   
console.log("closet",closet);

var main_container=document.getElementById("main_container");


closet.map(function(ele){

    var div=document.createElement("div");
    div.setAttribute("id","div");

    var pimg=document.createElement("img");
    pimg.setAttribute("id","pimg");
    pimg.setAttribute("src",ele.image.img1)

    var pName=document.createElement("h3");
    pName.setAttribute("id","pName");
    pName.innerText=ele.name;

    var pDetails=document.createElement("h3");
    pDetails.setAttribute("id","pDetails");
    pDetails.innerText=ele.details;

    var pPrice=document.createElement("h3");
    pPrice.setAttribute("id","pPrice");
    pPrice.innerText=`Rs.${ele.offer_price}`;

    var mainPrice=document.createElement("h3");
    mainPrice.setAttribute("id","mainPrice");
    mainPrice.innerText= `Rs.${ele.main_price}`

    var pDiscount=document.createElement("h3");
    pDiscount.setAttribute("id","pDiscount");
    pDiscount.innerText= `(${ele.discount}%)`;

    div.append(pimg,pName,pDetails,pPrice,mainPrice,pDiscount);
    main_container.appendChild(div)

  
        

        
})
=======
var closet = JSON.parse(localStorage.getItem("closetItems"));
var bag = JSON.parse(localStorage.getItem("bagItems")) || [];

console.log("closet",closet);

var main_container=document.getElementById("main_container");

function showData(){
closet.map(function(ele){

    var div=document.createElement("div");
    div.setAttribute("id","div");

    var pimg=document.createElement("img");
    pimg.setAttribute("id","pimg");
    pimg.setAttribute("src",ele.image.img1)

    var pName=document.createElement("h3");
    pName.setAttribute("id","pName");
    pName.innerText=ele.name;

    var pDetails=document.createElement("h3");
    pDetails.setAttribute("id","pDetails");
    pDetails.innerText=ele.details;

    var pPrice=document.createElement("h3");
    pPrice.setAttribute("id","pPrice");
    pPrice.innerText=`Rs.${ele.offer_price}`;

    var mainPrice=document.createElement("h3");
    mainPrice.setAttribute("id","mainPrice");
    mainPrice.innerText= `Rs.${ele.main_price}`

    var pDiscount=document.createElement("h3");
    pDiscount.setAttribute("id","pDiscount");
    pDiscount.innerText= `(${ele.discount}%)`;

    var addBag=document.createElement("button");
    addBag.setAttribute("id","addtoBag");
    addBag.innerText="Add To Bag"
    addBag.addEventListener('click', function () {
        addtoBag(ele);
    })


    var dltBtn=document.createElement("button");
    dltBtn.setAttribute("id","deleteButton");
    dltBtn.innerText="Remove From Closet";
    dltBtn.addEventListener('click', function () {
        deleteOne(ele);
    })

    


    div.append(pimg,pName,pDetails,pPrice,mainPrice,pDiscount,addBag,dltBtn);
    main_container.appendChild(div)

  
        

        
});
// delete one item----------------------------------->
function deleteOne(e) {
    // console.log(e);
    closet.splice(e, 1);
    localStorage.setItem('closetItems', JSON.stringify(closet));
    console.log("closet after delete one item",closet);
    window.location.reload();
    

}
// Add to bag------------------------------------------------------------->

    function addtoBag(ele) {
        
        for (let i = 0; i < bag.length; i++) {

            if (bag[i]._id == ele._id) {
            
                ele.quant = ele.quant + 1;
               
                bag.splice(i, 1);
                 break;
            }
         }
        bag.push(ele);
        localStorage.setItem("bagItems", JSON.stringify(bag));
        console.log("bag",bag)
        deleteOne(ele) 
    }
    
}
showData()
>>>>>>> Stashed changes
