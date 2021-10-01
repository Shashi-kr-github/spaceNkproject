//********* Slider-text ************/

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
