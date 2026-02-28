const letra = document.querySelectorAll('.box p span');

letra.forEach((line, index) => {
    setTimeout(() => {
        line.style.opacity = 1;
    }, index * 3000);
})


const nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click', () => {
    window.location.href = "earfquake.html";
});
const prevBtn = document.querySelector('.prev');
prevBtn.addEventListener('click', () => {
    window.location.href = "she.html";
});
