const item = document.querySelector('.items')
const cart = document.querySelector('.container-right')
let cartParse = JSON.parse(localStorage.getItem('productsCart')) || []; // Nếu không có giá trị trong localStorage, gán mảng trống cho cartParse

console.log('cartParse', cartParse);

cartParse.forEach((food) => {
    cart.innerHTML += `<p>${food}</p>`;
});

item.addEventListener('click', (event) => {
    if (event.srcElement.tagName === 'BUTTON') {
        let item = event.srcElement.value;
        console.log('item', item);
        cartParse.push(`${item}`);
        localStorage.setItem('productsCart', JSON.stringify(cartParse));
        cart.innerHTML += `<p>${item}</p>`;
    }
});
