// on page scroll animation
document.querySelectorAll('.scroll-animation-wrapper').forEach(element => {
    element.classList.remove('scroll-animation-wrapper-transition');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animation-wrapper-transition');
                observer.disconnect();
	            return;
            }
            entry.target.classList.remove('scroll-animation-wrapper-transition');
        });
    });
    observer.observe(element);
});

// fullscreen image view
const image_view = document.getElementById('image-view');
image_view.addEventListener('click', e => {
    e.target.style.zIndex = -5;
});
image_view.addEventListener('wheel', e => {
    e.preventDefault();
});
image_view.addEventListener('scroll', e => {
    e.preventDefault();
});

document.querySelectorAll('.type-card__img').forEach(img => {
    img.addEventListener('click', e => {
        image_view.style.backgroundImage = `url(${e.target.src})`;
        image_view.style.zIndex = 5;
    });
});
