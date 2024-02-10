const burgerIcon = document.querySelector(".burger-icon");
const nav = document.querySelector('nav');
const navList = document.querySelector('.nav-list')
const layout = document.querySelector('.layout');

const cartCounter = document.querySelector('.counter');

burgerIcon.addEventListener('click', () => {
    navList.classList.add('right');
    layout.classList.remove('hide');
    
});

nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('layout') || e.target.classList.contains('close')) {
        navList.classList.remove('right');
        layout.classList.add('hide');
    }

});

const currentYear = new Date().getFullYear();
const yearOptions = document.querySelector('.exp-year');
const monthOptions = document.querySelector('.exp-month');
for (i = currentYear; i <= (currentYear+ 15); i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    yearOptions.append(option);
}
for (i = 1; i <= 12; i++){
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    monthOptions.append(option);
}

const payBtn = document.querySelector('.pay-btn');
const requiredList = document.querySelectorAll('.required');
const validP = document.querySelector('.valid')
    let count = 0;

payBtn.addEventListener('click', (e) => {
    e.preventDefault();
    requiredList.forEach((el) => {
        
        el.addEventListener('change', (e)=>{
            if (el.value != '') {
            el.style.border = "1px solid rgb(118, 118, 118)";
            count += 1;
        }
        })
        if (el.value == '') {
            el.style.border = "2px solid red";
            validP.style.display = 'block';
        }
    })

})
