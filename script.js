AOS.init();

// (() => {
//     function addClasses() {
//         let ulElement = document.querySelector(".social-hidden-list");
//         let pElement = document.querySelector(".footer-menu-desc");
//         let svgElements = document.querySelectorAll(".footer-svg-anim");

//         ulElement.classList.add("social-hidden-list-hidden");
//         pElement.classList.add("footer-menu-desc-hidden");
//         svgElements.classList.add("footer-svg-anim-hidden");
//     }

//     function removeClasses() {
//         let ulElement = document.querySelector(".social-hidden-list");
//         let pElement = document.querySelector(".footer-menu-desc");
//         let svgElements = document.querySelectorAll(".footer-svg-anim");

//         ulElement.classList.remove("social-hidden-list-hidden");
//         pElement.classList.remove("footer-menu-desc-hidden");
//         svgElements.classList.remove("footer-svg-anim-hidden");
//     }

//     let container = document.querySelector(".footer-anim-container");
//     container.addEventListener("mouseover", addClasses);
//     container.addEventListener("mouseout", removeClasses);
// })();

(() => {
    function addClasses() {
        let ulElement = document.querySelector(".social-hidden-list");
        let pElement = document.querySelector(".footer-menu-desc");
        let svgElement = document.querySelector(".footer-svg-anim");
  
        ulElement.classList.add("social-hidden-list-hidden");
        pElement.classList.add("footer-menu-desc-hidden");
        svgElement.classList.add("footer-svg-anim-hidden");
    }
  
    function removeClasses() {
        let ulElement = document.querySelector(".social-hidden-list");
        let pElement = document.querySelector(".footer-menu-desc");
        let svgElement = document.querySelector(".footer-svg-anim");
  
        ulElement.classList.remove("social-hidden-list-hidden");
        pElement.classList.remove("footer-menu-desc-hidden");
        svgElement.classList.remove("footer-svg-anim-hidden");
    }
  
    let div = document.querySelector(".footer-anim-container");
    div.addEventListener("mouseover", addClasses);
    div.addEventListener("mouseout", removeClasses);
  })();