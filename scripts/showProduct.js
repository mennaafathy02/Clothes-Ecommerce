const imgHandler = document.querySelector('.product-previews');
const productPreview = document.querySelector('.main-preview');

console.log(imgHandler);

imgHandler.addEventListener('click', (e) => {
    productPreview.src = e.target.src;
})