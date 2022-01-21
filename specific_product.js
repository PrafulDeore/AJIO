

    // DOM------------------------------------------------------------->
    var cartData = JSON.parse(localStorage.getItem("productdb")) || [];
    var bag = JSON.parse(localStorage.getItem("bagItems")) || [];
    var closet = JSON.parse(localStorage.getItem("closetItems")) || [];
    // console.log("cartD!!!!",cartData) 
    // console.log("products",products)
    function showDetails(ele) {
        //  main_img-------------------------------------------------------------->
        var main_img = document.getElementById("main_img");

        var img = document.createElement("img");
        img.setAttribute("src", cartData.image.img1);
        img.setAttribute("id", "center_image");

        // leftbox----------------------------------------------------------->
        //  side_img1-------------------------------------------------------------->
        var innerBox1 = document.getElementById("innerBox1");
        var small_image1 = document.createElement("img");
        small_image1.setAttribute("src", cartData.image.img1);
        small_image1.setAttribute("id", "small_image1");

        //  side_img2--------------------------------------------------------->
        var innerBox2 = document.getElementById("innerBox2");
        var small_image2 = document.createElement("img");
        small_image2.setAttribute("src", cartData.image.img2);
        small_image2.setAttribute("id", "small_image2");
        //  side_img3--------------------------------------------------------->
        var innerBox3 = document.getElementById("innerBox3");
        var small_image3 = document.createElement("img");
        small_image3.setAttribute("src", cartData.image.img3);
        small_image3.setAttribute("id", "small_image3");

        // rightbox-------------------------------------------------------->
        var pName = document.getElementById("pName");
        var product_name = document.createElement("h4");
        product_name.setAttribute("id", "product_name");
        product_name.innerText = cartData.name;

        var pDetails = document.getElementById("pDetails");
        var product_details = document.createElement("h4");
        product_details.setAttribute("id", "product_details");
        product_details.innerText = cartData.details;

        var dPrice = document.getElementById("dPrice");
        var product_dPrice = document.createElement("h4");
        product_dPrice.setAttribute("id", "product_dPrice");
        product_dPrice.innerText = cartData.discount_price;

        var price_main = document.getElementById("price_main");
        var product_main_Price = document.createElement("h4");
        product_main_Price.setAttribute("id", "product_main_Price");
        product_main_Price.innerText = cartData.main_price;


        var pdiscount = document.getElementById("pdiscount");
        var product_pdiscount = document.createElement("h3");
        product_pdiscount.setAttribute("id", "product_pdiscount");
        product_pdiscount.innerText = `( ${cartData.discount}%)`;
        //  append--------------------------------------------------------------------->
        main_img.append(img);
        innerBox1.append(small_image1);
        innerBox2.append(small_image2);
        innerBox3.append(small_image3);
        pName.append(product_name);
        pDetails.append(product_details);
        dPrice.append(product_dPrice);
        price_main.append(product_main_Price);
        pdiscount.append(product_pdiscount);
    }
    showDetails();

    // BAG BUTTON----------------------------------------------------------------->
    console.log(cartData)
    console.log(bag.quant)
    var bagBtn = document.getElementById("bag")
    bagBtn.addEventListener("click", dataforCart)
    function dataforCart() {

        for (let i = 0; i < bag.length; i++) {

            if (bag[i].id == cartData.id) {
            
                cartData.quant = cartData.quant + 1;
               
                bag.splice(i, 1);
                 break;
            }
         }
        bag.push(cartData);
        localStorage.setItem("bagItems", JSON.stringify(bag));
        console.log("bag",bag)
    }

// CLOSEST BUTTON---------------------------------------------------->
var closetBtn=document.getElementById("closet");
closetBtn.addEventListener("click",dataforCloset);
    function dataforCloset(){
     closet.push(cartData);
        localStorage.setItem("closetItems", JSON.stringify(closet));
        console.log("closet",closet)
    }

// var cBtn=document.getElementById("cBtn");
// cBtn.addEventListener("click",gotoCloset);
// function gotoCloset(){
//   location.href = 'closet.html'
// }
// When we click on left-side small images they are display in main box-------------->
    small_image1.addEventListener("click", showImg1);
    function showImg1(ele) {
        main_img.innerHTML = "";
        var small1 = document.createElement("img");
        small1.setAttribute("src", cartData.image.img1);
        small1.setAttribute("id","imgg1")

        
        main_img.append(small1);
    }
    small_image2.addEventListener("click", showImg2);
    function showImg2(ele) {
        main_img.innerHTML = "";
        var small2 = document.createElement("img");
        small2.setAttribute("src", cartData.image.img2);
        small2.setAttribute("id","imgg2")

        
        main_img.append(small2);
    }

    small_image3.addEventListener("click", showImg3);
    function showImg3(ele) {
        main_img.innerHTML = "";
        var small3 = document.createElement("img");
        small3.setAttribute("src", cartData.image.img3);
        small3.setAttribute("id","imgg3")

        
        main_img.append(small3);
    }