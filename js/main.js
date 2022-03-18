let switcherPos = 0;
let switcherClicks = 1;
let animDuration = 200;
let menuTrigger = false;

let screenWidth = $(window).width();
let screenHeight = $(window).height();

let setSwitcherPos = () => {
    if (screenWidth <= 720) {
        switcherPos = 120;
    } else {
        switcherPos = 30;
    }
    $('#main__plate').css('transform', 'rotate(' + switcherPos + 'deg');
}
setSwitcherPos();

$('.main-pay').attr('class', 'd-none');
let sum = 0;
let cart = [];

let dishes = [{
    name: 'Foodore pizza',
    ingradients: [{
        ingradient: 'Cheese',
        weight: '40gr'
    }, {
        ingradient: 'Base',
        weight: '65gr'
    }, {
        ingradient: 'Tomatoes',
        weight: '100gr'
    }, {
        ingradient: 'Corn',
        weight: '42gr'
    }, {
        ingradient: 'Chicken',
        weight: '153gr'
    }],
    price: 165
}, {
    name: 'Brocolli salad',
    ingradients: [{
        ingradient: 'Brocolli',
        weight: '85gr'
    }, {
        ingradient: 'Oil',
        weight: '10gr'
    }, {
        ingradient: 'Tomatoes',
        weight: '50gr'
    }, {
        ingradient: 'Cucumber',
        weight: '95gr'
    }, {
        ingradient: 'Carrot',
        weight: '110gr'
    }, {
        ingradient: 'Onion',
        weight: '20gr'
    }, {
        ingradient: 'Paprica',
        weight: '50gr'
    }, {
        ingradient: 'Salt',
        weight: '5gr'
    }, {
        ingradient: 'Specias',
        weight: '15gr'
    }],
    price: 60
}, {
    name: 'Rice',
    ingradients: [{
        ingradient: 'Rice',
        weight: '300gr'
    }, {
        ingradient: 'Salt',
        weight: '10gr'
    }, {
        ingradient: 'Specias',
        weight: '20gr'
    }, ],
    price: 90
}, {
    name: 'Sushi set',
    ingradients: [{
        ingradient: 'Salmon',
        weight: '200gr'
    }, {
        ingradient: 'Cheese "Filadelfia"',
        weight: '65gr'
    }, {
        ingradient: 'Cucumber',
        weight: '40gr'
    }, {
        ingradient: 'Avocado',
        weight: '42gr'
    }, {
        ingradient: 'Rice',
        weight: '155gr'
    }, {
        ingradient: 'Sous',
        weight: '100gr'
    }],
    price: 190
}, {
    name: 'Steak',
    ingradients: [{
        ingradient: 'Meat',
        weight: '300gr'
    }, {
        ingradient: 'Specias',
        weight: '10gr'
    }, ],
    price: 200
}, {
    name: 'Bean soup',
    ingradients: [{
        ingradient: 'Beans',
        weight: '85gr'
    }, {
        ingradient: 'Tomatoes',
        weight: '95gr'
    }, {
        ingradient: 'Water',
        weight: '300gr'
    }, {
        ingradient: 'Potato',
        weight: '115gr'
    }, {
        ingradient: 'Chicken',
        weight: '50gr'
    }, {
        ingradient: 'Specias',
        weight: '20gr'
    }, {
        ingradient: 'Specias',
        weight: '20gr'
    }],
    price: 110
}]

// setting an ingradients
let setIngradients = (countInArray) => {
    $('.main__card-ingradients').html('');
    for (let i = 0; i != dishes[countInArray].ingradients.length; i++) {
        let countOfThisProd = i + 1;
        $('.main__card-ingradients').append("<div class='main__text-row main__text-row-ingrad" + countOfThisProd + "'></div>");
        $('.main__text-row.main__text-row-ingrad' + countOfThisProd).append("<p class='main__ingradient'>" + dishes[countInArray].ingradients[i].ingradient + "</p>");
        $('.main__text-row.main__text-row-ingrad' + countOfThisProd).append("<p class='main__ingradient-gramm'>" + dishes[countInArray].ingradients[i].weight + "</p>");
        $('.main__price').html(dishes[countInArray].price + '$');
    }
}
setIngradients(0)

// setting the name
let setFood = () => {
    switch (switcherClicks) {
        case 1:
            $('.main__name-of-dishes').slideUp(animDuration);
            setTimeout(function() {
                $('.main__name-of-dishes').html('<span class="main__name-of-dishes_orange">Foodore </span>pizza');
                setIngradients(0);
            }, animDuration)
            $('.main__name-of-dishes').slideDown(animDuration);
            break;
        case 2:
            $('.main__name-of-dishes').slideUp(animDuration);
            setTimeout(function() {
                $('.main__name-of-dishes').html(dishes[1].name);
                setIngradients(1);
            }, animDuration)
            $('.main__name-of-dishes').slideDown(animDuration);
            break;
        case 3:
            $('.main__name-of-dishes').slideUp(animDuration);
            setTimeout(function() {
                $('.main__name-of-dishes').html(dishes[2].name);
                setIngradients(2);
            }, animDuration)
            $('.main__name-of-dishes').slideDown(animDuration);
            break;
        case 4:
            $('.main__name-of-dishes').slideUp(animDuration);
            setTimeout(function() {
                $('.main__name-of-dishes').html('<span class="main__name-of-dishes_orange">Foodore </span>sushi set');
                setIngradients(3);
            }, animDuration)
            $('.main__name-of-dishes').slideDown(animDuration);
            break;
        case 5:
            $('.main__name-of-dishes').slideUp(animDuration);
            setTimeout(function() {
                $('.main__name-of-dishes').html(dishes[4].name);
                setIngradients(4);
            }, animDuration)
            $('.main__name-of-dishes').slideDown(animDuration);
            break;
        case 6:
            $('.main__name-of-dishes').slideUp(animDuration);
            setTimeout(function() {
                $('.main__name-of-dishes').html(dishes[5].name);
                setIngradients(5);
            }, animDuration)
            $('.main__name-of-dishes').slideDown(animDuration);
            break;
    }
}

$('#main__btn-previous').click(function() {
    switcherPos -= 60;
    if (switcherClicks <= 1) {
        switcherClicks = 6
    } else {
        switcherClicks--
    }

    $('.main__plate-body').css('transform', 'rotate(' + switcherPos + 'deg');
    setFood();
})

$('#main__btn-next').click(function() {
    if (switcherClicks >= 6) {
        switcherClicks = 1
    } else {
        switcherClicks++
    }
    switcherPos += 60;


    $('.main__plate-body').css('transform', 'rotate(' + switcherPos + 'deg')
    setFood();
})

$('.main__card-btn.main__card-btn-cart').click(function() {
    cart.push(dishes[switcherClicks - 1].name);
    sum += dishes[switcherClicks - 1].price;
    $('.header__my-cart-btn').html(cart.length);
    $('.header__my-cart-btn').css('animation', 'move 0.6s 1');
    setTimeout(() => {
        $('.header__my-cart-btn').css('animation', 'none');
    }, 600);
})

$('#menu-phone').click(function() {
    if (menuTrigger === false) {
        $('.header__menu-text').css({
            'display': 'flex',
            'flexDirection': 'column',
            'position': 'fixed',
            'right': 'calc((var(--cart-height) * 2) + (var(--padding-of-the-page) * 2))',
            'top': 'calc((var(--padding-of-the-page)) + 10vh)',
            'background': '#1a1a1a',
            'borderRadius': '15px',
            'padding': 'var(--padding-of-the-page)',
            'boxShadow': '0 0 20px #000000',
            'rowGap': '25px'
        });
        $('.header__menu-btn').css('animation', 'rotate 0.6s 1')
        setTimeout(() => {
            $('.header__menu-btn').attr('src', './header/header__mehu-close.svg');
            $('.header__menu-btn').css('animation', 'none')
        }, 100);
        menuTrigger = true;
    } else if (menuTrigger === true) {
        console.log('hi');
        $('.header__menu-text').css({
            'display': 'none',
            'flexDirection': 'row',
            'position': 'relative',
            'right': '0',
            'top': '0',
            'background': 'transparent',
            'borderRadius': '0',
            'padding': '0',
            'boxShadow': 'inherit',
            'rowGap': '0'
        });
        $('.header__menu-btn').css('animation', 'rotate-back 0.6s 1')
        setTimeout(() => {
            $('.header__menu-btn').attr('src', './header/header__menu.svg');
            $('.header__menu-btn').css('animation', 'none')
        }, 100);
        menuTrigger = false;
    }
})

$('.header__my-cart-btn').click(() => {
    if (cart.length === 0) {
        alert('❓ ERROR! \n' + 'Choose dishes and try again')
    } else {
        $('#main-pay').attr('class', 'main-pay container-fluid d-flex flex-column flex-md-row col col-12 justify-content-around align-items-center');
        $('#main').css('display', 'none');
        $('.list-group.list-group-flush.border-light').html('');
        let repeats = 0;
        let position = 0;
        for (let i = 0; i != cart.length; i++) {
            if (cart[i] === cart[i - 1]) {
                repeats++
                console.log(repeats)
                if (cart[i] != cart[i + 1]) {
                    repeats++;
                    $('#list-item' + position).html($('#list-item' + position).html() + ' x' + repeats)
                }
            } else {
                repeats = 0;
                position = i;
                $('.list-group.list-group-flush.border-light').append("<li id='list-item" + i + "' class='list-group-item bg-transparent text-white border-light main__goods'>" + cart[i] + "</li>")
            }
        }
    }
})

$('.dishes').click(function() {
    $('#main-pay').attr('class', 'd-none');
    $('#main').css('display', 'flex');
})