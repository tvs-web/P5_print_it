const slides = [
  {
    image: "slide1.jpg",
    tagline: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagline:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagline: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagline: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
function animation() {
  const arrow_left = document.querySelector(".arrow_left");
  const arrow_right = document.querySelector(".arrow_right");
  const photos = document.querySelectorAll(".banner-img");
  const bullet = document.querySelectorAll(".dot");
  let i = 0;

  arrow_left.addEventListener("click", () => {
    i = (i + 3) % photos.length;
    visioSlide(i);
  });

  arrow_right.addEventListener("click", () => {
    i = (i + 1) % photos.length;
    visioSlide(i);
  });

  bullet.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      visioSlide(index);
    });
  });
  return i;
}
function visioSlide(index2) {
  const photos = document.querySelectorAll(".banner-img");
  const legende = document.querySelectorAll(".legende");
  const bullet = document.querySelectorAll(".dot");

  photos.forEach((image, index) => {
    if (index === index2) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });

  legende.forEach((tagline, index) => {
    if (index === index2) {
      tagline.style.display = "block";
    } else {
      tagline.style.display = "none";
    }
  });

  bullet.forEach((dot, index) => {
    if (index === index2) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
function start() {
  const parentText = document.getElementById("banner");
  slides.forEach((text) => {
    const newText = document.createElement("p");
    newText.classList.add("legende");
    newText.innerHTML = text.tagline;
    parentText.appendChild(newText);
  });
  const index2 = animation();
  visioSlide(index2);
}
start();
