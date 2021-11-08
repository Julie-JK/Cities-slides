const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    /**muzeme pouzit jak cyklus for(..of..) nebo jako jina moznost forEach() */
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}