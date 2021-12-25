let CART = [{
    name:'milk',
    qty:2,
    price:28,
    total:56
}];


function check_add_product(){
    let name = document.getElementById("prod_name").value,
    qty = document.getElementById("prod_qty").value,
    price = document.getElementById("prod_price").value,
    valid = true;

    if(name==""){
        valid = false;
    }
    if(qty==""){
        valid = false;
    }else{
        qty = parseInt(qty);
        if(qty<=0){
            valid = false;
        }
    }



    if(price==""){
        valid = false;
    }else{
        price = parseFloat(price);
        if(panel<=0){
            valid = false;
        }
    }


    if(valid){
        add_to_card(name, qty, price);
    }else{
        panel.warning("Please fill correct all fields", true)
    }
}

function add_to_card(name, qty, price){
    console.log(name, qty, price);
    let ind = CART.findIndex((el)=>el.name==name);
    if(ind==-1){
        CART.push({
            name:name,
            qty:qty,
            price:price,
            total:qty*price
        });
    }else{
        CART[ind].qty+=qty;
        CART[ind].total = CART[ind].qty*CART[ind].price;
    }
    console.log(CART);
    document.getElementById("prod_name").value = '';
    document.getElementById("prod_qty").value = '1';
    document.getElementById("prod_price").value = '';
    panel.success('Product seccessfully added', true);
    shoopng_lict();
}


function shoopng_lict(){
    let card_html = '';
    for(let i = 0; i<CART.length; i++){
        card_html += <li>${CART[i].name} ${CART[i].price} &times; ${CART[i].qty} = ${CART[i].total}</li>;
    }
    document.getElementById("cart_list").innerHTML = card_html;
}
shoopng_lict();