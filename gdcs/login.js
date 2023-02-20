var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  const login_btn = document.querySelector("#login-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  
  const login_btn2 = document.querySelector("#login-btn2");
  const sign_up_btn2 = document.querySelector("#sign-up-btn2");
  
  sign_up_btn.addEventListener("click", ()=>{
    container.classList.add("sign-up-mode")
  });
  
  login_btn.addEventListener("click", ()=>{
    container.classList.remove("sign-up-mode")
  });
  sign_up_btn2.addEventListener("click", ()=>{
    container.classList.add("sign-up-mode2")
  });
  
  login_btn2.addEventListener("click", ()=>{
    container.classList.remove("sign-up-mode2")
  });

  
