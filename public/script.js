document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    document.getElementById('cvButton').addEventListener('click', function() {
        window.open('cv.pdf', '_blank');
    });

    document.getElementById('coverLetterButton').addEventListener('click', function() {
        window.open('coverletter.pdf', '_blank');
    });
});
