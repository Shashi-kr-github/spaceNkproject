

let cart_data = JSON.parse(localStorage.getItem("selected_prod"));
let data_div = document.getElementById("data");
var total=0;

cart_data.forEach(function (product) {

    let div = document.createElement("div");

    let p_name = document.createElement("p");
    p_name.innerText = product.name;

    let span_title = document.createElement("p");
    span_title.innerText = product.title;

    let p_price = document.createElement("p");
    p_price.innerText = product.price;

    let image = document.createElement("img");
    image.src = product.img;
    image.setAttribute("id", "prod-img");

    div.append(image, p_name, p_price);

    data_div.append(div);
    total= total + Number(product.price);
})

let total_h1 = document.getElementById("total");
total_h1.innerHTML = `Total Amount to Pay :- &#163; ${total}.00`;




/********* Promo code Validation **********/

var promo_btn = document.getElementById("promo-btn");

var final_amount = document.getElementById("final-amt");
promo_btn.addEventListener("click", checkPromo);

function checkPromo() {
    var promocode = document.getElementById("promo").value;
    if (promocode == "VISHAL30"){
        alert("Promocode Applied Successfully");
        var final_amt= document.createElement("span");
        final_amt.innerHTML= `Final amount :-  &#163; ${94.50}`;
        final_amount.append(final_amt);
    }
    else{
        alert("Invalid Promocode");
    }
}




function makepayment(){
    setTimeout(function(){
        alert("Payment Successfull");
    
    },3000);

    window.location.href="thankyou.html"
}
