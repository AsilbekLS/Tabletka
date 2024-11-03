// Modal elementlarini tanlaymiz
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close-button");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");

// Kartalar uchun kontent ma'lumotlarini tayyorlaymiz
const cardContent = {
  1: {
    img: "./assets/modal-img/Product Card 1.png",
    
  },
  2: {
    img: "./assets/modal-img/Group 2.png",
  },
  3: {
    img: "./assets/modal-img/Product Card 3.png",
  },
  4: {
    img: "./assets/sertifikat-img/6.png",
  },
  5: {
    img: "./assets/sertifikat-img/8.png",
  },
  6: {
    img: "./assets/sertifikat-img/Bint-perevyazka-krovoostanavlivajushhaya.-Bolshoj-bint-734x1024 1.png",
  },
  7: {
    img: "./assets/sertifikat-img/jhgl 1.png",
  },
  8: {
    img: "./assets/sertifikat-img/Povyazka-tamponada-krovoostanavlivajushhaya-734x1024 1.png",
  },

};

// Har bir modal tugmasiga hodisa biriktirish
document.querySelectorAll(".modal-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const cardId = event.target.getAttribute("data-id");
    const content = cardContent[cardId];

    // Modalga ma'lumotlarni joylashtiramiz
    modalImage.src = content.img; // Set image source
    modalDescription.textContent = content.description; // Set description text

    // Modalni ko‘rsatish
    modal.style.display = "block";
  });
});

// Modalni yopish funksiyasi
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Modalni tashqi qismini bosganda yopish
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});










// /media_navbar

function toggleMediaBar() {
  const mediaBar = document.getElementById("mediaBar");
  if (mediaBar.style.display === "flex") {
      mediaBar.style.display = "none";
  } else {
      mediaBar.style.display = "flex";
  }
}