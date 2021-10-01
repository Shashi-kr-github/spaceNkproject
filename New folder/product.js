/*********** Image Slideshow ************/

function slideshow_images() {
   
    let slide_img = document.getElementById('slide-img');
    let img = document.createElement('img');
    let img_arr = ['https://bit.ly/38eZ8kE', 'https://bit.ly/3ypq9wi'];

    img.src = img_arr[0];
    img.style.width = '100%';
    slide_img.append(img);
    let i = 1;
    setInterval(function () {
        img.src = img_arr[i % img_arr.length];
        img.style.width = '100%';
        i++;
        slide_img.append(img);
    }, 2000);
    
  
}
slideshow_images();

/********* SLIDE SHOW JS END  *********/

var count = 1;
let cart_btn = document.getElementById("add_to_cart");

cart_btn.addEventListener("click", function () {
  if (count != 0) {
    current_prod[0].item_count = count;
    localStorage.setItem('selected_prod', JSON.stringify(current_prod))
    // console.log(current_prod);
  
    let shopping_bag;
    if (localStorage.getItem("shopping_bag") == null) {
      localStorage.setItem("shopping_bag", JSON.stringify(current_prod));
    } else {
      var temp_bag = JSON.parse(localStorage.getItem("shopping_bag"));
     // console.log(temp_bag);

      var flag = 0;
      for (let i = 0; i < temp_bag.length; i++) {
        if (temp_bag[i].prod_id_num == current_prod[0].prod_id_num) {
          temp_bag[i].item_count = current_prod[0].item_count;
          console.log("We are here.");
          flag = 1;
          break;
        }
      }
      if (flag) {
        localStorage.setItem("shopping_bag", JSON.stringify(temp_bag));
        console.log("Here because of same id")
      } else {
        temp_bag.push(current_prod[0]);
        localStorage.setItem("shopping_bag", JSON.stringify(temp_bag));
      }
    }
  }
});

