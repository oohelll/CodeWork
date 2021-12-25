const burger = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-list');
    const links = document.querySelectorAll('.nav-list li');
    const btnList = document.querySelectorAll('.btn-nav button');
    const nav = document.querySelector('nav');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        links.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })

        nav.classList.toggle('nav-scroll-bottom');
    })
};

const modal = () => {
    const modal = document.querySelector('.login-modal');
    const btn = document.querySelector('#masuk');
    const btn2 = document.querySelector('.masuk');
    const close = document.querySelector('.close');

    btn.addEventListener('click', () => {
        modal.style.display = "block"
    })

    btn2.addEventListener('click', () => {
        modal.style.display = "block"
    })

    close.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    modal.addEventListener('click', (e) => {
        if(e.target == modal) {
            modal.style.display = "none"
        }
    })
}

export {burger, modal};