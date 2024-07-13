

(() => {
    const refs = {
    openMenuBtn: document.querySelector('.menu-open-btn'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    li: document.querySelectorAll('.nav-menu-list-item-burger'),
    };
    
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    
    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        
        refs.li.forEach((item, index) => {
            setTimeout(() => {
                item.classList.toggle('animation');
            }, index * 300);
        });
    }
    })();

