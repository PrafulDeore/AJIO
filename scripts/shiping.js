var arr = JSON.parse(localStorage.getItem("addressList")) || [];

console.log(arr);
displayAddress(arr);

function displayAddress(arr) {
    var appendidd = document.querySelector("#appendid");
    arr.forEach(function (el) {

        var div = document.createElement("div");

        var h3 = document.createElement("h4");
        h3.innerText = el.name;

        var p1 = document.createElement("p");
        p1.innerText = el.locality;

        // var p2 = document.createElement("p");
        // p2.innerText = el.distt;

        var p3 = document.createElement("p");
        p3.innerText = el.distt + el.state;

        var p4 = document.createElement("p");
        p4.innerText = "India" + " - " + el.pin;

        var p5 = document.createElement("p");
        p5.innerText = "Phone:" + " " + el.mob;

        div.append(h3, p1, p3, p4, p5);

        appendidd.append(div)
        console.log(p4)

    })


}
//------------------------------------------------------

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
//-----------------------------------------------------

let bag_t = JSON.parse(localStorage.getItem('total_bag')) || {};
document.getElementById('bagt').innerHTML = `Rs. ${bag_t.total_bag.toFixed(2)}`;
document.getElementById('bags').innerHTML = `Rs. ${bag_t.total_save.toFixed(2)}`;
document.getElementById('bagp').innerHTML = `Rs. ${bag_t.total_price.toFixed(2)}`;

//--------------------------------------------------
//  total product pricing

var arr = JSON.parse(localStorage.getItem("prodList"));
console.log("arr:", arr);

products = [
    {
        image: {
            img1: "https://assets.ajio.com/medias/sys_master/root/20211115/cBXP/61927ce4aeb2690110c4958c/-1117Wx1400H-460982469-red-MODEL.jpg",
            img2: "https://assets.ajio.com/medias/sys_master/root/20211115/8GgO/6192827eaeb2690110c4b1cc/-1117Wx1400H-460982469-red-MODEL2.jpg",
            img3: "https://assets.ajio.com/medias/sys_master/root/20211115/tTEn/61927a9baeb2690110c48b4e/-1117Wx1400H-460982469-red-MODEL3.jpg"

        },
        name: "Product By Jack & Jones",
        details: "Quilted Jacket with Zipper Pockets",
        main_price: 3499,
        discount_price: 1924,
        offer_price: 1575,
        discount: 45,
        type: "Jacket",
        id: 001,
        quant: 1

    },

    {
        image: {
            img1: "https://assets.ajio.com/medias/sys_master/root/20211228/Kk50/61ca0750f997ddf8f1630d62/-1117Wx1400H-469047349-blue-MODEL.jpg",
            img2: "https://assets.ajio.com/medias/sys_master/root/20211228/4LcF/61ca3706aeb26901101f785a/-1117Wx1400H-469047349-blue-MODEL2.jpg",
            img3: "https://assets.ajio.com/medias/sys_master/root/20211228/cfJj/61ca2f18aeb26901101f1709/-1117Wx1400H-469047349-blue-MODEL3.jpg"
        },
        name: "Product By Jack & Jones",
        details: "Urban Pro Panelled Washed Jacket",
        main_price: 2799,
        discount_price: 1400,
        offer_price: 1260,
        discount: 50,
        type: "Jacket",
        id: 002,
        quant: 1
    },
]

arr.push(products)
localStorage.setItem("prodList", JSON.stringify(arr));



document.querySelector("bagTotal").innerText = "5554";



