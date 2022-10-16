function updateProductNumber(quantity, price) {
    const selected_product_num = parseInt(document.getElementById(quantity).value);
    var initial_product_num = parseInt(document.getElementById('tquantity').innerText);
    var intotal_product = selected_product_num + initial_product_num;

    // to set total product
    tquantity.innerText = intotal_product;
    var temp = selected_product_num * price;

    var initial_product_price = parseInt(document.getElementById('tprice').innerText);
    var total_price = initial_product_price + temp;
    tprice.innerText = total_price;

    if (total_price <= 500) {
        dc.innerText = 100;
        shipc.innerText = 100;
        var temp_dc = 100;
    }
    else if (total_price <= 800) {
        dc.innerText = 150;
        shipc.innerText = 150;
        var temp_dc = 150;
    }
    else {
        dc.innerText = 200;
        shipc.innerText = 200;
        var temp_dc = 200;
    }
    var total_price_with_dc = total_price+temp_dc+temp_dc; 
    tprice2.innerText = total_price_with_dc;

    var temp_tax = total_price*0.15; 
    ttax.innerText = parseInt(temp_tax); 
    tpay.innerText = parseInt(temp_tax+total_price_with_dc); 
}


function addToCart(pr) {
    var qota = document.getElementById('tproduct').innerText;
    var temp = parseInt(qota);
    var temp2 = parseInt(document.getElementById('price').innerText);
    tproduct.innerText = temp + 1;
    price.innerText = temp2 + pr;
}

function ClearCart() {
    tquantity.innerText = 0;
    tprice.innerText = 0;
    dc.innerText = 0;
    shipc.innerText = 0;
    tprice2.innerText = 0;
    ttax.innerText = 0;
    tpay.innerText = 0;
}
document.getElementById("button-cart-1").addEventListener('click', function () {
    updateProductNumber('c1', 5000);
});
document.getElementById("button-cart-2").addEventListener('click', function () {
    updateProductNumber('c2', 7000);
});
document.getElementById("button-cart-3").addEventListener('click', function () {
    updateProductNumber('c3', 3500);
});
document.getElementById("button-cart-4").addEventListener('click', function () {
    updateProductNumber('c4', 500);
});
document.getElementById("button-cart-5").addEventListener('click', function () {
    updateProductNumber('c5', 500);
});
document.getElementById("button-cart-6").addEventListener('click', function () {
    updateProductNumber('c6', 2500);
});



document.getElementById("price-1").addEventListener('click', function () {
    addToCart(5000);
});
document.getElementById("price-2").addEventListener('click', function () {
    addToCart(7000);
});
document.getElementById("price-3").addEventListener('click', function () {
    addToCart(3500);
});
document.getElementById("price-4").addEventListener('click', function () {
    addToCart(500);
});
document.getElementById("price-5").addEventListener('click', function () {
    addToCart(500);
});
document.getElementById("price-6").addEventListener('click', function () {
    addToCart(2500);
});




document.getElementById("button-clear").addEventListener('click', function () {
    ClearCart();
});

document.getElementById("button-check").addEventListener('click', function () {
    alert("Thanks for shopping!" + "\nTotal amount of purchased: " + totaltax.innerText);
});

