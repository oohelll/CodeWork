const burger = () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-links');
    const list = document.querySelectorAll('.nav-links li');
    const listBtn = document.querySelectorAll('.btn-links button');
    const nav = document.querySelector('nav');

    burger.addEventListener('click', () => {
        navList.classList.toggle('nav-active');

        list.forEach((listed, i) => {
            if(listed.style.animation) {
                listed.style.animation = '';
            } else {
                listed.style.animation = `Fade 0.5s ease forwards ${i / 7 + 0.6}s`
            }
        });

        listBtn.forEach((btn, i) => {
            if(btn.style.animation) {
                btn.style.animation = '';
            } else {
                btn.style.animation = `Fade 0.5s ease forwards ${i / 7 + 0.6}s`
            }
        });

        nav.classList.toggle('nav-bottom');
    })
};

// const carrousel = () => {
//     const slide = document.querySelectorAll('.slide');
//     let currentSlide = 0;

//     const changeSlide = (sliding) => {
//         slide.forEach((slides, index) => {
//             slides.style.transform = `translateX(${100 * (index - sliding)}%)`
//         });
//     }
//     changeSlide(currentSlide);
// }
// const modal = () => {
//     const modal = document.querySelector('.login-modal');
//     const btn = document.querySelector('#masuk');
//     const btn2 = document.querySelector('.masuk');
//     const close = document.querySelector('.close');

//     btn.addEventListener('click', () => {
//         modal.style.display = "block"
//     })

//     btn2.addEventListener('click', () => {
//         modal.style.display = "block"
//     })

//     close.addEventListener('click', () => {
//         modal.style.display = 'none'
//     })

//     modal.addEventListener('click', (e) => {
//         if(e.target == modal) {
//             modal.style.display = "none"
//         }
//     })
// }

export {burger};