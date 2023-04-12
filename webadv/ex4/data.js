let products = [
{
    name: 'Pho09',
    title: 'Day la mon an co truyen cua Ha Noi va Viet Nam', 
    img: "./item-picture1.webp",
},
{
    name: 'Ph234',
    title: 'Day la mon an co truyen cua Ha Noi va Viet Nam', 
    img: "./item-picture1.webp",
},
{
    name: 'Pho673',
    title: 'Day la mon an co truyen cua Ha Noi va Viet Nam', 
    img: "./item-picture1.webp",
},
{
    name: 'Pho344',
    title: 'Day la mon an co truyen cua Ha Noi va Viet Nam', 
    img: "./item-picture1.webp",
},
{
    name: 'Pho545',
    title: 'Day la mon an co truyen cua Ha Noi va Viet Nam', 
    img: "./item-picture1.webp",
},
{
    name: 'Pho786',
    title: 'Day la mon an co truyen cua Ha Noi va Viet Nam', 
    img: "./item-picture1.webp",
},

]
let productsCart = []
let productsCartString=JSON.stringify(productsCart) 
localStorage.setItem('productsCart',productsCartString)
let productsString= JSON.stringify(products)
console.log(productsString)
localStorage.setItem('products',productsString)
let productsData=localStorage.getItem('products')
console.log(JSON.parse(productsData))

let items=document.querySelector('.items')
for (product of products){
    items.innerHTML+=`
    <div class="item">
    <div class="product-view">
        <img class="img-icon" src=${product.img} alt="">
        <button type="input" value= '${product.name}' >add to list</button> </div>
    <div class="content">
        <h3>${product.name}</h3>
        <p>
            ${product.title}
        </p>
    </div>
`
}