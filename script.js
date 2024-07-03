(() => {
    function addClasses(event) {
        let container = event.currentTarget;
        container.querySelector(".social-hidden-list")?.classList.add("social-hidden-list-hidden");
        container.querySelector(".social-hidden-list-listen")?.classList.add("social-hidden-list-hidden");
        container.querySelector(".footer-menu-desc")?.classList.add("footer-menu-desc-hidden");
        container.querySelector(".footer-svg-anim")?.classList.add("footer-svg-anim-hidden");
        container.querySelector(".footer-menu-desc-listen")?.classList.add("footer-menu-desc-listen-hidden");
    }

    function removeClasses(event) {
        let container = event.currentTarget;
        container.querySelector(".social-hidden-list")?.classList.remove("social-hidden-list-hidden");
        container.querySelector(".social-hidden-list-listen")?.classList.remove("social-hidden-list-hidden");
        container.querySelector(".footer-menu-desc")?.classList.remove("footer-menu-desc-hidden");
        container.querySelector(".footer-svg-anim")?.classList.remove("footer-svg-anim-hidden");
        container.querySelector(".footer-menu-desc-listen")?.classList.remove("footer-menu-desc-listen-hidden");
    }

    let divs = document.querySelectorAll(".footer-anim-container");
    divs.forEach(div => {
        div.addEventListener("mouseover", addClasses);
        div.addEventListener("mouseout", removeClasses);
    });
})();