
var next_page = 1;

let pagecount;
fetch_data()
document.getElementById("pagecount_previous").onclick = () => {
    if (next_page > 1) {

        next_page--;

    }
    console.log("hhh", next_page)
    fetch_data()

}
let arr;
async function fetch_data() {

    try {
        let response = await fetch(`https://clone-dummy-ajio.herokuapp.com/product?page=${next_page}&items=10`);
        let data = await response.json();
        // data.categories.prototype.price = 400;
        // console.log(data.categories.price);
        let products = data.product

        price_sort(products)

        console.log('data:', data.product);
        pagecount = data.pagecount
        display(data.product)
        // myfilter(data.product)
        document.getElementById("pagenumber").innerHTML = `Page : ${next_page}`
    }
    catch (er) {
        console.log('er:', er);

    }

}

document.getElementById("pagecount_next").onclick = () => {
    if (next_page < pagecount) {
        next_page++;

    }
    console.log("hhh", next_page)
    fetch_data()

}
// dishes_data()
// display(products)



function display(products) {
    document.getElementById('total_items').innerHTML = `${products.length} Items Found`;
    document.getElementById('products').innerHTML = null;
    products.map((ele) => {
        let div_quick = document.createElement('div')
        let div_img = document.createElement('div');
        div_img.setAttribute('class', 'img_div')

        div_quick.setAttribute('id', 'quickview');
        div_quick.innerHTML = "Quick View";


        let div = document.createElement('div');
        let price_div = document.createElement('div');
        price_div.setAttribute("class", 'prices')
        let img = document.createElement('img');
        img.src = ele.image.img1;
        let brand = document.createElement('h6');
        brand.innerHTML = ele.name;
        let detail = document.createElement('p');
        detail.innerHTML = ele.details;
        let price_main = document.createElement('p');
        price_main.innerHTML = `Rs. ${ele.main_price}`;
        let price_discount = document.createElement('p');
        price_discount.innerHTML = `Rs. ${ele.discount_price}`;
        let price_offer = document.createElement('p');

        let dis = document.createElement('p');
        dis.innerHTML = `(${ele.discount}% off)`;
        div_img.append(img, div_quick);
        let offer = ele.offer_price;

        price_offer.innerHTML = `Offer Price: <span style="color:#75cb7f">Rs. ${ele.offer_price}</span>`;

        // sending id to the local storage for Specific product Page
        price_div.append(price_discount, price_main, dis);
        div.onclick = () => {
            localStorage.setItem('productdb', JSON.stringify(ele._id));
           
         window.location.href = "./specific_product.html"
        }
        if (offer == "") {
            div.append(div_img, brand, detail, price_div);
        } else {
            div.append(div_img, brand, detail, price_div, price_offer);
        }

        document.getElementById('products').append(div);




    })
}

// categories hide/show function 
document.getElementById('cate_gry_show').onclick = () => {
    document.getElementById('cate_gry_show').style.display = "none"
    document.getElementById('categories').style.display = "block"
    document.getElementById('cate_gry_hide').style.display = "block"


}
document.getElementById('cate_gry_hide').onclick = () => {
    document.getElementById('cate_gry_show').style.display = "block"
    document.getElementById('categories').style.display = "none"
    document.getElementById('cate_gry_hide').style.display = "none"


}

// price hide show function
document.getElementById('show_prices').onclick = () => {
    document.getElementById('show_prices').style.display = "none"
    document.getElementById('price').style.display = "block"
    document.getElementById('hide_prices').style.display = "block"


}
document.getElementById('hide_prices').onclick = () => {
    document.getElementById('show_prices').style.display = "block"
    document.getElementById('price').style.display = "none"
    document.getElementById('hide_prices').style.display = "none"


}
// brand hide show function 
document.getElementById('show_brand').onclick = () => {
    document.getElementById('show_brand').style.display = "none"
    document.getElementById('brands').style.display = "block"
    document.getElementById('hide_brand').style.display = "block"


}
document.getElementById('hide_brand').onclick = () => {
    document.getElementById('show_brand').style.display = "block"
    document.getElementById('brands').style.display = "none"
    document.getElementById('hide_brand').style.display = "none"


}

// discount hide show function 
document.getElementById('show_discount').onclick = () => {
    document.getElementById('show_discount').style.display = "none"
    document.getElementById('discounts').style.display = "block"
    document.getElementById('hide_discount').style.display = "block"


}
document.getElementById('hide_discount').onclick = () => {
    document.getElementById('show_discount').style.display = "block"
    document.getElementById('discounts').style.display = "none"
    document.getElementById('hide_discount').style.display = "none"


}

// color hide show function 
document.getElementById('show_color').onclick = () => {
    document.getElementById('show_color').style.display = "none"
    document.getElementById('colors').style.display = "block"
    document.getElementById('hide_color').style.display = "block"


}
document.getElementById('hide_color').onclick = () => {
    document.getElementById('show_color').style.display = "block"
    document.getElementById('colors').style.display = "none"
    document.getElementById('hide_color').style.display = "none"


}
//grid function show 4 cards


document.getElementById('grid_4').onclick = () => {
    console.log("gg")
    document.getElementById('products').style.gridTemplateColumns = "repeat(4, 1fr)";
    document.getElementById('grid4').style.backgroundColor = "#939393";
    document.getElementById('grid3').style.backgroundColor = "lightgray";
}
//grid function show 3 card
document.getElementById('grid_3').onclick = () => {
    console.log("gg")

    document.getElementById('products').style.gridTemplateColumns = "repeat(3, 30%)";
    document.getElementById('grid4').style.backgroundColor = "lightgray";
    document.getElementById('grid3').style.backgroundColor = "#939393";
}



async function myfilter() {

    //  filter data for types 
    let tshirt = document.getElementById('tshirt').checked;
    let jacket = document.getElementById('jacket').checked;
    let pant = document.getElementById('pant').checked;
    let short = document.getElementById('shorts').checked;

    let filter_pro = [];
    if (tshirt) {
        filter_pro.push("T-Shirt")
    } if (jacket) {
        filter_pro.push("Jacket")
    } if (pant) {
        filter_pro.push("pant")
    } if (short) {
        filter_pro.push("Shorts")
    }


    // filter data for price 

    let r700 = document.getElementById('r700').checked;
    let r1500 = document.getElementById('r1500').checked;
    let r2500 = document.getElementById('r2500').checked;
    let r2600 = document.getElementById('r2600').checked;
    let price_filter = [];
    if (r700) {
        price_filter.push(700)
    } if (r1500) {
        price_filter.push(1500)
    } if (r2500) {
        price_filter.push(2500)
    } if (r2600) {
        price_filter.push(2500)
    }
    console.log(price_filter)

    // filter data for brand name 
    let nicks = document.getElementById('nicks').checked;
    let netplay = document.getElementById('netplay').checked;
    let levis = document.getElementById('levis').checked;
    let mpl = document.getElementById('mpl').checked;
    let adidas = document.getElementById('adidas').checked;
    let brand_filter = [];
    if (nicks) {
        brand_filter.push("Nike")
    } if (netplay) {
        brand_filter.push("NETPLAY")
    } if (levis) {
        brand_filter.push("LEVIS")
    } if (mpl) {
        brand_filter.push("Mpl Sports")
    } if (adidas) {
        brand_filter.push("ADIDAS")
    }

    // filter for color 
    let blue = document.getElementById('blue').checked;
    let red = document.getElementById('red').checked;
    let green = document.getElementById('green').checked;
    let black = document.getElementById('black').checked;
    // let adidas = document.getElementById('adidas').checked;
    let color_filter = [];
    if (blue) {
        color_filter.push("Blue")
    } if (red) {
        color_filter.push("orange")
    } if (green) {
        color_filter.push("Green")
    } if (black) {
        color_filter.push("Black")
    }
    console.log(color_filter)
    // if (adidas) {
    //     brand_filter.push("ADIDAS")
    // }

    // filter based on discount 
    let d20 = document.getElementById('d20').checked;
    let d40 = document.getElementById('d40').checked;
    let d60 = document.getElementById('d60').checked;
    let d80 = document.getElementById('d80').checked;
    // let adidas = document.getElementById('adidas').checked;
    let dis_filter = [];
    if (d20) {
        dis_filter.push(20)
    } if (d40) {
        dis_filter.push(40)
    } if (d60) {
        dis_filter.push(60)
    } if (d80) {
        dis_filter.push(80)
    }

    if (dis_filter.length == 0 && color_filter.length == 0 && price_filter.length == 0 && filter_pro.length == 0 && brand_filter.length == 0) {
        fetch_data()
        document.getElementById("pagecount").style.display = "flex"
        // document.getElementById("pagecount").style.display = "block"

    } else {
        try {
            let response = await fetch(`http://localhost:4493/product/q?type=${filter_pro}&name=${brand_filter}&color=${color_filter}&page=${next_page}&items=10`);
            let data = await response.json();
            // data.categories.prototype.price = 400;
            // console.log(data.categories.price);
            let products = data.product
            price_sort(products)

            console.log('data:', data.product);
            // pagecount = data.pagecount
            // display(data.product, data.pagecount)
            // myfilter(data.product)
            document.getElementById("pagecount").style.display = "none"
            products = data.product
            display(data.product)
        }
        catch (er) {
            console.log('er:', er);

        }
    }





    // if (tshirt) {

    //     arr.filter((ele) => {
    //         if (ele.type == "T-Shirt") {
    //             filter_pro.push(ele);
    //         }
    //     })

    // }
    // if (jacket == true) {

    //     arr.filter((ele) => {
    //         if (ele.type == "Jacket") {
    //             filter_pro.push(ele);
    //         }
    //     })

    // }
    // if (pant) {

    //     arr.filter((ele) => {
    //         if (ele.type == "pant") {
    //             filter_pro.push(ele);
    //         }
    //     })

    // }
    // if (short) {
    //     arr.filter((ele) => {
    //         if (ele.type == "Shorts") {
    //             filter_pro.push(ele);
    //         }
    //     })
    // }

    // display(filter_pro);


    // if (filter_pro.length == 0) {
    //     display(arr);
    // }


    // console.log(tshirt)

}

function price_sort(products) {


    document.getElementById('sorting_function').onchange = function displaysorted() {
        console.log("sorting fun......")
        // event.preventDefault();
        document.getElementById('products').innerHTML = "";

        let sortValue = document.querySelector("#sorting_function").value;
        let sortedarr = products;
        // console.log(sortValue);
        if (sortValue == "low") {
            sortedarr = sortedarr.sort(function (a, b) {
                return Number(a.discount_price) - Number(b.discount_price);
            });

            display(sortedarr);
        }
        else if (sortValue == "High") {
            sortedarr = sortedarr.sort(function (a, b) {
                return Number(b.discount_price) - Number(a.discount_price);
            });
            display(sortedarr);
        }
        else if (sortValue == "") {
            display(products)
        }
    }
}