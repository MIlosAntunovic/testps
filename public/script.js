//  if (window.innerWidth <= 425)
//   {
//     var sswiper = new Swiper(".mySwiper", {
//         loop:false,
//         slidesPerView: 1,
//         spaceBetween: 30,
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//           },
//       });
//   }
//   else if (window.innerWidth >= 425 && window.outerWidth <=768)
//   {
//     var sswiper = new Swiper(".mySwiper", {
//         loop:false,
//         slidesPerView: 2,
//         spaceBetween: 30,
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//           },
//       });
//   }
//   else if (window.innerWidth >= 768 && window.outerWidth <=1400)
//   {
//     var sswiper = new Swiper(".mySwiper", {
//         loop:false,
//         slidesPerView: 3,
//         spaceBetween: 30,
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//           },
//       });
//   }
//   else{
//     var sswiper = new Swiper(".mySwiper", {
//         loop:false,
//         slidesPerView: 5,
//         spaceBetween: 30,
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//           },
//       });
//   }



let intervalpopup = setInterval(()=>{
    let popup = document.querySelector('.overlay');
    popup.style.display='block'; 
    let body = document.querySelector("body");
    body.style.overflow='hidden';
    clearInterval(intervalpopup);
    intervalpopup=null;
},3000);






// const swiper = new Swiper('.swiperv1', {
//     /*autoplay:{
//         delay:4000,
//         disableOnInteraction:false,
//     },*/
//     loop: true,

//     pagination: {
//         el: '.swiper-pagination',
//         clickable:true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

// });






// document.querySelector('#menuopen').addEventListener('click',()=>{
//     let meni=document.querySelector('.nav-2 ul');
//     let menuopen=document.querySelector(".nav-1 #menuopen");
//     let menuclose=document.querySelector(".nav-1 #menuclose");
//     meni.style.display='block';
//     menuopen.style.display='none';
//     menuclose.style.display='block';
// });

// document.querySelector('#menuclose').addEventListener('click',()=>{
//     let meni=document.querySelector('.nav-2 ul');
//     let menuopen=document.querySelector(".nav-1 #menuopen");
//     let menuclose=document.querySelector(".nav-1 #menuclose");
//     meni.style.display='none';
//     menuopen.style.display='block';
//     menuclose.style.display='none';
// });




// document.querySelector('.overlay #popupclose').addEventListener('click',()=>{
//     let popup = document.querySelector('.overlay');
//     popup.style.display='none';
//     let body = document.querySelector("body");
//     body.style.overflow='visible';
// });

// document.querySelector("header #turndark").addEventListener('click',()=>{
//     let link=document.querySelectorAll('head link')[1];
//     link.href="./scss/dark.css"
// });
// document.querySelector("header #turnlight").addEventListener('click',()=>{
//     let link=document.querySelectorAll('head link')[1];
//     link.href="./scss/style.css"
// });




