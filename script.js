const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposalScreen = document.getElementById("proposalScreen");
const slideshowScreen = document.getElementById("slideshowScreen");
const music = document.getElementById("bgMusic");

let yesSize = 1;

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES button grows
yesBtn.addEventListener("mouseover", () => {
  yesSize += 0.1;
  yesBtn.style.transform = `scale(${yesSize})`;
});

// When YES is clicked
yesBtn.addEventListener("click", () => {
  proposalScreen.classList.add("hidden");
  slideshowScreen.classList.remove("hidden");
  music.play();
  showSlide(currentSlide);
});


// ---------------- SLIDESHOW SYSTEM ----------------

const slides = [
  {
    text: "From the moment we started talking… 💫",
    images: ["assets/photo1.jpg"]
  },
  {
    text: "You turned my normal days into the best ones 🥹",
    images: ["assets/photo2.jpg", "assets/gif1.gif"]
  },
  {
    text: "So… will you officially be my Valentine? ❤️",
    images: ["assets/photo3.jpg"]
  }
];

let currentSlide = 0;

function showSlide(index) {
  const container = document.getElementById("slidesContainer");
  container.innerHTML = "";

  const slide = slides[index];
  const div = document.createElement("div");
  div.className = "slide";

  const p = document.createElement("p");
  p.innerText = slide.text;
  div.appendChild(p);

  slide.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    div.appendChild(img);
  });

  container.appendChild(div);
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

