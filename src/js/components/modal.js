function modal() {
    const modal = document.querySelector('.modal');
    const openBtn = document.querySelector('.header__top-btn');
    const closeBtn = document.querySelector('.modal__close-btn');
    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
    openBtn.addEventListener('click', () => {
        let scrollWith = getScrollbarWidth();
        console.log(scrollWith);
        document.body.style.paddingRight = `${scrollWith}px`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';;
        }
    });
}

export default modal;
