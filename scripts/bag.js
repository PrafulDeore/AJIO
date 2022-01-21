let total_arr = [];
let total_bag = 0;
let total_save = 0;
let total_price = 0;
let final_bag = {};
let bag_arr = JSON.parse(localStorage.getItem('bagItems')) || [];
display_bag(bag_arr)
document.getElementById('card_len').innerHTML = `(${bag_arr.length} items)`;
function display_bag(bag_arr) {
    document.getElementById('bagmain').innerHTML = null;

    bag_arr.map((ele, index) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'bag_card')
        let img_detail_div = document.createElement('div');
        img_detail_div.setAttribute('class', 'img_detail')
        let image = document.createElement('img');
        image.src = ele.image.img1;

        // product details div 
        let detial_div = document.createElement('div');
        detial_div.setAttribute("class", 'pro_details_div')
        let pro_name = document.createElement('p');
        pro_name.innerHTML = `${ele.name}- <span>${ele.details}</span>`;
        let pro_detail = document.createElement('p');
        pro_detail.innerHTML = ele.details;
        detial_div.append(pro_name);

        // quantity div 
        let quantity_div = document.createElement('div');
        quantity_div.setAttribute('class', 'quantity_div');
        let qty = document.createElement('p');
        qty.innerHTML = `<span>Qty</span> ${ele.quant} `;
        let plus = document.createElement('p');
        plus.innerHTML = `<i class="fas fa-plus"></i>`;
        let minus = document.createElement('p');
        minus.innerHTML = ` <i class="fas fa-minus"></i>`
        plus.onclick = () => {
            ele.quant = ele.quant + 1;
            qty.innerHTML = `qty ${ele.quant}`;
            console.log(ele.quant);
            bag_arr.splice(index, 1);
            bag_arr.push(ele);

            localStorage.setItem('bagItems', JSON.stringify(bag_arr));


            display_bag(bag_arr);

        }
        minus.onclick = () => {
            if (ele.quant > 1) {
                ele.quant = ele.quant - 1;
            }

            qty.innerHTML = `qty ${ele.quant} `;
            bag_arr.splice(index, 1);
            bag_arr.push(ele);

            localStorage.setItem('bagItems', JSON.stringify(bag_arr));


            display_bag(bag_arr);

            console.log(ele.quant);
        }



        quantity_div.append(plus, qty, minus);

        //prices div
        let price_div = document.createElement('div');
        price_div.setAttribute("class", 'price_div')
        let saving = document.createElement('p');


        saving.innerHTML = `<i class="fas fa-angle-down"></i> <span>Savings : </span> Rs. ${(ele.quant * (ele.main_price - ele.discount_price)).toFixed(2)}`;
        let discount_p = document.createElement('p');
        discount_p.innerHTML = `Rs. ${(ele.quant * ele.discount_price).toFixed(2)}`;
        let main_price = document.createElement('p');
        main_price.innerHTML = `Rs. ${(ele.quant * ele.main_price).toFixed(2)} (${ele.discount}%)`;

        //delete btn div 
        let del_closet = document.createElement('div');
        del_closet.setAttribute('class', ' del_closet');
        let delete_btn = document.createElement('p');
        delete_btn.innerHTML = "Delete";
        delete_btn.addEventListener('click', function () {
            mydelete(index);
        })
        let move_to_closet = document.createElement('p');
        move_to_closet.innerHTML = `<i class="fas fa-paperclip"></i> Move to closet`;

        del_closet.append(delete_btn, move_to_closet);
        price_div.append(saving, main_price, discount_p);

        let div_pri_del = document.createElement('div');
        div_pri_del.setAttribute('class', 'pri_del')
        del_closet.setAttribute("class", 'del_close')
        div_pri_del.append(price_div, del_closet);
        img_detail_div.append(image, detial_div)
        div.append(img_detail_div, quantity_div, div_pri_del);
        document.getElementById('bagmain').append(div);

        total_bag += ele.quant * ele.main_price;
        total_save += ele.quant * (ele.main_price - ele.discount_price);
        total_price += ele.quant * ele.discount_price;
    });
}

final_bag = {
    total_save,
    total_bag,
    total_price
}

document.getElementById('bagt').innerHTML = `Rs. ${total_bag.toFixed(2)}`;
document.getElementById('bags').innerHTML = `Rs. ${total_save.toFixed(2)}`;
document.getElementById('bagp').innerHTML = `Rs. ${total_price.toFixed(2)}`;
localStorage.setItem('total_bag', JSON.stringify(final_bag));
// display_bag(bag_arr);




function mydelete(index) {
    console.log(index);
    bag_arr.splice(index, 1);
    localStorage.setItem('bagItems', JSON.stringify(bag_arr));
    display_bag(bag_arr);
    document.getElementById('card_len').innerHTML = `(${bag_arr.length} items)`;

}
