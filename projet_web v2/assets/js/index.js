const modal = document.querySelectorAll('.services__modal'),
    modalButton = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        activeModal(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})


const swiperprofil = new Swiper('.profil__swipper', {


    loop: true,
    spaceBetween: 50,
    grabCursor: true,


    pagination: {
        el: '.swiper-pagination',
        dynamicBullet: true,
        clickable: true,
    },
});