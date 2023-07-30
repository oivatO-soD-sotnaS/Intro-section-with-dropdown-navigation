const menuIcon = document.getElementById('menu-icon');
const menuCheckbox = document.getElementById('menu-checkbox');

const featuresCheckbox = document.getElementById('featuresCheckbox');
const featuresLabel = document.getElementById('featuresLabel');
const featuresArrow = document.getElementById('featuresArrow');

const companyCheckbox = document.getElementById('companyCheckbox');
const companyLabel = document.getElementById('companyLabel');
const companyArrow = document.getElementById('companyArrow');

const overlay = document.getElementById('overlay');
const nav = document.getElementById('nav');

menuIcon.addEventListener('click', () => {
    if(!menuCheckbox.checked){
        menuIcon.src = 'images/icon-close-menu.svg';
        overlay.style.display = "block";
    }
    if(menuCheckbox.checked){
        menuIcon.src = 'images/icon-menu.svg';
        overlay.style.display = "none";
    }
})

overlay.addEventListener('click', () => {
    menuIcon.src = 'images/icon-menu.svg';
    nav.style.translateX = "100%"
    overlay.style.display = "none";
    menuCheckbox.checked = !menuCheckbox.checked;
})


featuresLabel.addEventListener('click', () => {
    if(!featuresCheckbox.checked){
        featuresArrow.src = 'images/icon-arrow-up.svg'
    }
    if(featuresCheckbox.checked){
        featuresArrow.src = 'images/icon-arrow-down.svg'
    }
})
companyLabel.addEventListener('click', () => {
    if(!companyCheckbox.checked){
        companyArrow.src = 'images/icon-arrow-up.svg'
    }
    if(companyCheckbox.checked){
        companyArrow.src = 'images/icon-arrow-down.svg'
    }
})
