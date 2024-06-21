document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const configList = document.getElementById('config-list');
    const navText1 = document.getElementById('nav-text1');

    btnMenu.addEventListener('click', () => {
        configList.classList.toggle('active');
    });

    navText1.addEventListener('click', () => {
        configList.classList.toggle('active');
    })
});
