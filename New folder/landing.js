var carousel = document.querySelector(".carousel");
var flkty = new Flickity(carousel, {
  imagesLoaded: true,
  percentPosition: false,
});

var imgs = carousel.querySelectorAll(".carousel-cell img");

var docStyle = document.documentElement.style;
var transformProp =
  typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var img = imgs[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    img.style[transformProp] = "translateX(" + x + "px)";
  });
});

function slideshowOffer() {
  let slide_text = document.getElementById("slide-text");
  let p = document.createElement("p");
  let announcement_msg = [
    `Earn  up  to  ${"&#163"} 100!  Receive $20  for  every  ${"&#163"} 100  you  spend.`,
    `Free  uk  next  day  delivery  on  all  orders  ${"&#163"} 100 `,
    "Free  samples  with  all  orders ",
    "Free  gifts  with  purchase.  Browse  now ",
  ];

  p.innerHTML = announcement_msg[0];
  slide_text.append(p);
  let i = 1;
  setInterval(function () {
    p.innerHTML = announcement_msg[i % announcement_msg.length];
    i++;
    slide_text.append(p);
  }, 3000);
}
slideshowOffer();
