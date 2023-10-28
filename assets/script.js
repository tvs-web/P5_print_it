// const slides = [
//   {
//     image: "slide1.jpg",
//     tagline: "Impressions tous formats <span>en boutique et en ligne</span>",
//     dot: "dot1",
//   },
//   {
//     image: "slide2.jpg",
//     tagline:
//       "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
//     dot: "dot2",
//   },
//   {
//     image: "slide3.jpg",
//     tagline: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
//     dot: "dot3",
//   },
//   {
//     image: "slide4.png",
//     tagline: "Autocollants <span>avec découpe laser sur mesure</span>",
//     dot: "dot4",
//   },
// ];
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const photos = document.querySelectorAll(".banner-img");
const legende = document.querySelectorAll(".banner-img + p");
const bullet = document.querySelectorAll(".dot");

let i = 0;
function visioSlide(i) {
  photos.forEach((image, index) => {
    if (index === i) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
    console.log(index, image, i);
  });

  legende.forEach((tagline, index) => {
    if (index === i) {
      tagline.style.display = "block";
    } else {
      tagline.style.display = "none";
    }
  });

  bullet.forEach((dot, index) => {
    if (index === i) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

arrow_left.addEventListener("click", () => {
  i = (i + 3) % photos.length;
  console.log(i);
  visioSlide(i);
});

arrow_right.addEventListener("click", () => {
  i = (i + 1) % photos.length;
  console.log(i);
  visioSlide(i);
});

bullet.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    visioSlide(index);
    i = index;
  });
});
visioSlide(i);
