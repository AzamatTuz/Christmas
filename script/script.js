const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 150 && window.scrollY < 400) {
        header.style.backgroundColor = "red"
        header.style.background = 'linear-gradient(-355deg, rgba(255,0,0,1) 35%, rgba(255,173,173,1) 120%)'
        header.style.transform = "translateY(-50vh)"
    } else if (window.scrollY > 500) {
        header.style.background = '#ff0000'
        header.style.background = 'linear-gradient(-355deg, rgba(255,0,0,1) 35%, rgba(255,173,173,1) 120%)'
        header.style.transform = "translateY(0vh)"
    } else {
        header.style.background = ""
        header.style.transform = "translateY(0vh)"
    }
})

const cardSection = document.getElementById('cardSection');

const cards = [
    {
        cardName: 'Wine Bottle',
        cardImage: 'https://assets.personalwine.com/assets/frontend/pages/christmas/carousel/christmas_engraving_2-b4d3e09d4a488dd0d38ae9297fb043c4e51cbef33ea1298098b6e46c9aee2212.png',
        cardPrice: 125,
        soldout: false,
        dicountPrice: 140,
    },

    {
        cardName: 'Santa Bag',
        cardImage: 'https://png.pngtree.com/png-clipart/20231017/ourmid/pngtree-christmas-bag-png-image_10218936.png',
        cardPrice: 155,
        soldout: false,
        dicountPrice: 168,
    },

    {
        cardName: 'Santa Cap',
        cardImage: 'https://www.freeiconspng.com/uploads/christmas-santa-hat-png-33.png',
        cardPrice: 230,
        soldout: true,
        dicountPrice: 235,
    },

    {
        cardName: 'Foot Gloves',
        cardImage: 'https://static.vecteezy.com/system/resources/thumbnails/015/742/731/small/gloves-for-christmas-and-celebration-png.png',
        cardPrice: 60,
        soldout: false,
        dicountPrice: 0,
    },

    {
        cardName: 'Door Decating',
        cardImage: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlwnvt8dP_1xosp0w-0k8JNGtHsMvo2WUUI3zvqBIqrwmTwBSC',
        cardPrice: 115,
        soldout: false,
        dicountPrice: 138,
    },

    {
        cardName: 'Tree Candle',
        cardImage: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZGQqoAJVfnOoY02J-zXeMJBySsL_iX7TXfN_Y9FPhqSYBXmyf',
        cardPrice: 200,
        soldout: false,
        dicountPrice: 210,
    },

    {
        cardName: 'Santa',
        cardImage: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfONs1wWoydkuA6a6D2JRirfuh77Vuud4pjbscI6RAjhd1Ldmz',
        cardPrice: 150,
        soldout: true,
        dicountPrice: 165,
    },

    {
        cardName: 'Decoration Light',
        cardImage: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTK-AoK2vxat531mEawWO0-mmbPNPd21SKrUF0hiPibwFOVKywe',
        cardPrice: 120,
        soldout: false,
        dicountPrice: 130,
    },
];


const icons = document.getElementById('icons')
const cartNumber = document.createElement('p');
const heartNumber = document.createElement('p');
let cartNumbers = 0;
let heartNumbers = 0;

cartNumber.textContent = cartNumbers
heartNumber.textContent = heartNumbers

cartNumber.classList.add('cartNumber');
heartNumber.classList.add('heartNumber');

icons.appendChild(cartNumber);
icons.appendChild(heartNumber);

cards.forEach((card) => {
    const cardBox = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardPrc = document.createElement('span');
    const cardNme = document.createElement('h2');
    const cardSecBox = document.createElement('div');
    const productDiv = document.createElement('div')
    const eye = document.createElement('button');
    const heart = document.createElement('button');
    const cart = document.createElement('button');

    cardBox.classList.add('card')
    cardSecBox.classList.add('priceProduct')
    cardImg.src = card.cardImage;
    cardNme.textContent = card.cardName;
    cardPrc.textContent = card.cardPrice + ' $';
    cart.innerHTML = `<svg class="svgIcon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="4.62 9.96 15.34 9.96 21.71 37.85 49.69 37.85 56.17 16.35 16.67 15.79"></polyline><path d="M51.73,44.35H21.67a3.21,3.21,0,0,1-3.28-3.28c0-3.22,3.32-3.22,3.32-3.22"></path><circle cx="24.95" cy="51.61" r="3.53"></circle><circle cx="46.04" cy="51.61" r="3.53"></circle></g></svg>`
    heart.innerHTML = `<svg class="svgIcon" width="20px" fill="#ffffff" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m1692.48 910.647-732.762 687.36-731.182-685.779c-154.616-156.875-154.616-412.122 0-568.997 74.542-75.558 173.704-117.233 279.304-117.233h.113c105.487 0 204.65 41.675 279.078 117.233l.113.113c74.767 75.783 116.103 176.865 116.103 284.385h112.941c0-107.52 41.224-208.602 116.104-284.498 74.428-75.558 173.59-117.233 279.19-117.233h.113c105.487 0 204.763 41.675 279.19 117.233 154.617 156.875 154.617 412.122 1.695 567.416m78.833-646.701c-95.887-97.355-223.737-150.89-359.718-150.89h-.113c-136.094 0-263.83 53.535-359.604 150.777-37.61 38.061-68.443 80.979-92.16 127.398-23.718-46.42-54.664-89.337-92.16-127.285-95.774-97.355-223.51-150.89-359.605-150.89h-.113c-135.981 0-263.83 53.535-359.83 150.89-197.648 200.696-197.648 526.983 1.694 729.035l810.014 759.868L1771.313 991.4c197.647-200.47 197.647-526.758 0-727.454" fill-rule="evenodd"></path> </g></svg>`
    eye.innerHTML = `<svg class="svgIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
    cart.classList.add('productIcon');
    eye.classList.add('productIcon');
    heart.classList.add('productIcon');
    productDiv.classList.add('productDiv');

    if (card.soldout) {
        const soldoutBox = document.createElement('div');
        const soldoutText = document.createElement('p');

        soldoutText.textContent = 'Soldout'
        soldoutText.classList.add('soldoutText')
        soldoutBox.classList.add('soldout')

        cardBox.appendChild(soldoutBox);
        cardBox.appendChild(soldoutText);
    }

    cardBox.appendChild(cardImg);
    cardBox.appendChild(cardNme);
    cardSecBox.appendChild(cardPrc);
    cardBox.appendChild(productDiv)
    cardBox.appendChild(cardSecBox);
    productDiv.appendChild(eye);
    productDiv.appendChild(heart)
    productDiv.appendChild(cart)

    cardSection.appendChild(cardBox)


    if (card.dicountPrice > 0) {
        const dicountText = document.createElement('span');
        const dicountLine = document.createElement('hr')

        dicountText.textContent = card.dicountPrice + " $"
        dicountLine.classList.add('discountLine');
        dicountText.classList.add('discountText');

        cardSecBox.appendChild(dicountText);
        cardSecBox.appendChild(dicountLine)
    }

    cardBox.addEventListener('mouseover', () => {
        productDiv.style.opacity = '1';
    })

    cardBox.addEventListener('mouseleave', () => {
        productDiv.style.opacity = '0';
    })

})




const newProductBtn = document.getElementById('newProductBtn');
const featuredProductBtn = document.getElementById('featuredProductBtn');
const bestProductBtn = document.getElementById('bestProductBtn');

newProductBtn.addEventListener('click', () => {
    featuredProductBtn.classList.remove('productBtn');
    featuredProductBtn.classList.add('productBtnDis');

    bestProductBtn.classList.remove('productBtn');
    bestProductBtn.classList.add('productBtnDis');

    newProductBtn.classList.add('productBtn');
    newProductBtn.classList.remove('productBtnDis');

    cardSection.style.display = 'grid'
})

featuredProductBtn.addEventListener('click', () => {
    newProductBtn.classList.remove('productBtn');
    newProductBtn.classList.add('productBtnDis');

    bestProductBtn.classList.add('productBtnDis');
    bestProductBtn.classList.remove('productBtn');

    featuredProductBtn.classList.add('productBtn');
    featuredProductBtn.classList.remove('productBtnDis');

    cardSection.style.display = 'none'
})

bestProductBtn.addEventListener('click', () => {
    newProductBtn.classList.remove('productBtn');
    newProductBtn.classList.add('productBtnDis');

    featuredProductBtn.classList.remove('productBtn');
    featuredProductBtn.classList.add('productBtnDis');

    bestProductBtn.classList.remove('productBtnDis');
    bestProductBtn.classList.add('productBtn');

    cardSection.style.display = 'none'
});

const secondCardSection = document.getElementById('secondCardSection')

cards.forEach((card) => {
    const cardBox = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardPrc = document.createElement('span');
    const cardNme = document.createElement('h2');
    const cardSecBox = document.createElement('div');
    const productDiv = document.createElement('div')

    cardBox.classList.add('secCard')
    cardSecBox.classList.add('priceProduct')
    cardImg.src = card.cardImage;
    cardNme.textContent = card.cardName;
    cardPrc.textContent = card.cardPrice + ' $';

    cardBox.appendChild(cardImg);
    cardBox.appendChild(cardNme);
    cardBox.appendChild(productDiv);
    cardBox.appendChild(cardSecBox);

    secondCardSection.appendChild(cardBox)


    if (card.dicountPrice > 0) {
        const dicountText = document.createElement('span');
        const dicountLine = document.createElement('hr')

        dicountText.textContent = card.dicountPrice + " $"
        dicountLine.classList.add('discountLine');
        dicountText.classList.add('discountText');

        cardSecBox.appendChild(dicountText);
        cardSecBox.appendChild(dicountLine)
    }
})

const leftBtn = document.getElementById('leftArrowBtn')

leftBtn.addEventListener('click', () => {
    secondCardSection.scrollLeft -= 565;
})

const rightBtn = document.getElementById('rightArrowBtn')

rightBtn.addEventListener('click', () => {
    secondCardSection.scrollLeft += 565;
})

const snowy = document.getElementById('snowy')
const NUMBER_OF_SNOWFLAKES = 200;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 0;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
snowy.appendChild(canvas);

const ctx = canvas.getContext('2d');


const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5 // next
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
}

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway; // next
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
}

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

window.addEventListener('resize', () => {
    canvas.width = snowy.innerWidth;
    canvas.height = snowy.innerHeight;
});

// setInterval(animate, 15);
animate()

const arrowUp = document.getElementById('arrowUp');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        arrowUp.style.left = '95%'
    } else {
        arrowUp.style.left = '120%'
    }
})