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
