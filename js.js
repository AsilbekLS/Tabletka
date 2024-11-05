// Modal elementlarni tanlaymiz
const modal = document.getElementById("modal");
const modal2 = document.getElementById("modal_222");
const closeModal = document.querySelector(".close-button");
const modalImage = document.getElementById("modal-image");
const imgmod = document.getElementsByClassName("imgsert");
const modalImage_1 = document.getElementById("modal_cont1");
const modalImage_2 = document.getElementById("modal_cont2");
const modalImage_3 = document.getElementById("modal_cont3");
const img_modal2 = document.getElementById("img_modal2");
const modalImage2 = document.getElementById("modal_content2");
const modalImage_all = document.getElementsByClassName("modal_content");
const modalDescription = document.getElementById("modal-description");
const close2 = document.getElementById("close2")
const close_img1 = document.getElementById("close-button1")
const close_img2 = document.getElementById("close-button2")
const close_img3 = document.getElementById("close-button3")
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
    img: "./assets/sertifikat-img/9.png",
  },
  7: {
    img: "./assets/sertifikat-img/10.png",
  },
  8: {
    img: "./assets/sertifikat-img/11.png",
  },
};










// Har bir modal tugmasiga hodisa biriktirish
document.querySelectorAll(".modal-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const cardId = event.target.getAttribute("data-id");
    const content = cardContent[cardId];

    function changeImage() {
      
         const imgElement = document.getElementById('myImage'); 
         imgElement.src = content.img;

 
      }
    changeImage()
    // Контейнер для элементов
   
    
    // Создаем HTML для каждого элемента и добавляем его в контейнер
    // modalImage2.innerHTML = '';
    //  const items = [ { id: cardId, img: content.img } ];
    //   items.map(item => 
    //     { const itemDiv = document.createElement('div'); 
    //       itemDiv.className = 'item';
    //        itemDiv.innerHTML =
    //         ` <img src=${item.img} alt=""> 
    //         `;
    //         const img = itemDiv.querySelector('img');
    //         img.style.height = '100%'
    //         img.style.width = '100%'
    //          modalImage2.appendChild(itemDiv); 
    //         });



  
    

    if(cardId == 2){
      modalImage_1.style.display = "none"
      modalImage_2.style.display = "block"
       modalImage_3.style.display = "none"
      console.log( modalImage_1.style.display);
      
    }
    else if(cardId == 1){
          modalImage_1.style.display = "block"
          modalImage_2.style.display = "none"
           modalImage_3.style.display = "none"
    }
    else if(cardId == 3){
      modalImage_1.style.display = "none"
      modalImage_2.style.display = "none"
       modalImage_3.style.display = "block"
}
    console.log(cardId);
    

    // Modalga ma'lumotlarni joylashtiramiz
    
    modalImage.src = content.img; // Set image source
   
    modalDescription.textContent = content.description; // Set description text


    // Modalni ko‘rsatish
    if(cardId<=3){
      
      modal.style.display = "block"; // Ensure the modal is displayed
    setTimeout(() => {
      modal.style.transform = "scale(1)";




    }, 10);}
    else{
      modal2.style.backgroundColor = "rgba(0, 0, 0, 0.587)";
      
       
       
      modal2.style.position = "fixed"; // Ensure the modal is displayed
      setTimeout(() => {
        modal2.style.transform = "scale(1)";
  
  
  
  
      }, 10);
    } // Add slight delay to trigger animation
    
    
    
    
  });
});

// Modalni yopish funksiyasi
close_img1.addEventListener("click", () => {


  modal.style.transform = "scale(0)";
  
  setTimeout(() => {
    modal.style.display = "none";
  }, 1000); // Wait for transition to finish
});

close_img2.addEventListener("click", () => {


  modal.style.transform = "scale(0)";
  setTimeout(() => {
    modal.style.display = "none";
  }, 1000); // Wait for transition to finish
});

close_img3.addEventListener("click", () => {


  modal.style.transform = "scale(0)";
  setTimeout(() => {
    modal.style.display = "none";
  }, 1000); // Wait for transition to finish
});

close2.addEventListener("click", () => {

  modal2.style.backgroundColor = "#00000000";
  modal2.style.transform = "scale(0)";
  setTimeout(() => {
    modal2.style.position = "none";
  }, 1000);

});





// Modalni tashqi qismini bosganda yopish
window.addEventListener("click", (event) => {

  
  if (event.target == modal) {
    modal.style.transform = "scale(0)";
    setTimeout(() => {
      modal.style.display = "none";
    }, 1000); // Wait for transition to finish
  }
  


});



// Массив данных




window.addEventListener("click", (event) => {

  
  if (event.target == modal2) {
    modal2.style.transform = "scale(0)";
    setTimeout(() => {
      modal2.style.position = "none";
    }, 1000); // Wait for transition to finish
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