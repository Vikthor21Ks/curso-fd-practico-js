

//Menu Desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isasideClosed = aside.classList.contains('inactive');

    if (!isasideClosed) {
        aside.classList.add('inactive');
    }

    const isProductDetailAsideClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailAsideClosed){
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

//Menu Mobile
const menuHamIcon = document.querySelector('.menu');
const menuHamMobile = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){

    const isasideClosed = aside.classList.contains('inactive');

    if (!isasideClosed) {
        aside.classList.add('inactive');
    }

    const isProductDetailAsideClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailAsideClosed){
        productDetailContainer.classList.add('inactive');
    }

    menuHamMobile.classList.toggle('inactive');
};


//Carrito
const menuCaritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuCaritoIcon.addEventListener('click',toggleCarritoAside)

function toggleCarritoAside(){
    const ismenuHamMobileClosed = menuHamMobile.classList.contains('inactive');

    if (!ismenuHamMobileClosed) {
        menuHamMobile.classList.add('inactive');
    }

    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isdesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailAsideClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailAsideClosed){
        productDetailContainer.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
};


//Productos mostrar Aside 
const productDetailContainer = document.querySelector('.product-detail-2');

function openProductDetailAside(){
    const isasideClosed = aside.classList.contains('inactive');

    if (!isasideClosed) {
        aside.classList.add('inactive');
    }

    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isdesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    
    productDetailContainer.classList.remove('inactive');
}

//Productos Cerrar aside detalles
const productDetailCloseIcon = document.querySelector('.product-detail-2-close')
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

//PRODUCTOS
const cardsContainer=document.querySelector('.cards-container');

const productList = [];
productList.push({
    name:'bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Pantalla',
    price:125,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'monitor',
    price: 182,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //Product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click',openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');    

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' +product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}
renderProducts(productList);



