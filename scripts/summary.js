let totalAmt = JSON.parse(localStorage.getItem("total_bag")) || {};
let address = JSON.parse(localStorage.getItem('addressList')) || []
let date_o = Math.floor(Math.random() * 10 + 1);
console.log(date_o);
document.getElementById('order_date').innerHTML = `${date_o} Feb`
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
document.getElementById('adds').innerHTML = `${address[0].locality}, ${address[0].distt},${address[0].state} -${address[0].pin} `
document.getElementById('phn').innerHTML = `Phone : <b>${address[0].mob}</b>`
document.getElementById('user_name').innerHTML = `<i>${address[0].name}</i>`
let bag_arr = JSON.parse(localStorage.getItem('bagItems')) || [];


// bag_arr = [
//     {
//         "image": {
//             "img1": "https://assets.ajio.com/medias/sys_master/root/20211115/cBXP/61927ce4aeb2690110c4958c/-1117Wx1400H-460982469-red-MODEL.jpg",
//             "img2": "https://assets.ajio.com/medias/sys_master/root/20211115/8GgO/6192827eaeb2690110c4b1cc/-1117Wx1400H-460982469-red-MODEL2.jpg",
//             "img3": "https://assets.ajio.com/medias/sys_master/root/20211115/tTEn/61927a9baeb2690110c48b4e/-1117Wx1400H-460982469-red-MODEL3.jpg"
//         },
//         "name": "Product By Jack & Jones",
//         "details": "Quilted Jacket with Zipper Pockets",
//         "main_price": 3499,
//         "discount_price": 1924,
//         "offer_price": 1575,
//         "discount": 45,
//         "type": "Jacket",
//         "id": 1,
//         "quant": 4
//     },
//     // {
//     //     "image": {
//     //         "img1": "https://assets.ajio.com/medias/sys_master/root/20211228/Kk50/61ca0750f997ddf8f1630d62/-1117Wx1400H-469047349-blue-MODEL.jpg",
//     //         "img2": "https://assets.ajio.com/medias/sys_master/root/20211228/4LcF/61ca3706aeb26901101f785a/-1117Wx1400H-469047349-blue-MODEL2.jpg",
//     //         "img3": "https://assets.ajio.com/medias/sys_master/root/20211228/cfJj/61ca2f18aeb26901101f1709/-1117Wx1400H-469047349-blue-MODEL3.jpg"
//     //     },
//     //     "name": "Product By Jack & Jones",
//     //     "details": "Urban Pro Panelled Washed Jacket",
//     //     "main_price": 2799,
//     //     "discount_price": 1400,
//     //     "offer_price": 1260,
//     //     "discount": 50,
//     //     "type": "Jacket",
//     //     "id": 2,
//     //     "quant": 1
//     // }
// ]



bag_arr.map((ele) => {
    let div = document.createElement("div")
    div.setAttribute("id", "container_main")
    let div1 = document.createElement("div")
    let image = document.createElement("img")
    let date_e = document.createElement('p');
    date_e.innerHTML = `Expected Delivery : <b>${date_o} Feb</b>`;
    div1.setAttribute("class", "div_img")
    image.src = ele.image.img1;
    let quant = document.createElement('p');
    quant.innerHTML = `Qty <b>${ele.quant}</b>`
    let name = document.createElement("p")
    name.innerHTML = `${ele.name} - <span>${ele.details}</span>`
    let price = document.createElement("p")
    price.innerHTML = `<span>Rs. ${ele.main_price.toFixed(2)}</span><span> (${ele.discount}%)</span> <b>Rs. ${ele.discount_price.toFixed(2)}`




    // let discount_div = document.createElement("div")
    // let discount = document.createElement("p")
    // discount.textContent =  `DISCOUNT ${ele.discount}`
    // discount_div.append(discount)



    div1.append(image, date_e)

    div.append(div1, name, quant, price)

    document.getElementById('order_items').append(div);


})

document.getElementById('btn_final2').onclick = () => {
    bag_arr = [];
    localStorage.setItem('bagItems', JSON.stringify(bag_arr));
    window.location.href = "./index.html";
}


document.getElementById('btn_final').onclick = () => {

    bag_arr = [];
    localStorage.setItem('bagItems', JSON.stringify(bag_arr));
    window.location.href = "./index.html";
}