const textToColor = document.querySelectorAll("#colored__text")
textToColor.forEach((el, key) => {
    let chars = el.innerHTML.split("")
    chars = chars.map((n, i) => {
        if(i % 2 == 0){
            return `<span id="span__colored__1">${n}</span>`
        }
        else{
            return `<span id="span__colored__2">${n}</span>`
        }
    })
    console.log(chars)
    el.innerHTML = chars.join("");
})


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const checkVisibility = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            // Если элемент находится в области видимости
            if (sectionTop < window.innerHeight && sectionBottom > 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible'); // Опционально: убрать анимацию при скролле вверх
            }
        });
    };

    // Проверяем видимость при загрузке страницы и при прокрутке
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Первоначальная проверка
});