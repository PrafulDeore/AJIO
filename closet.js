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