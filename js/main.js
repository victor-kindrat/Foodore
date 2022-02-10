let switcherPos = 30;
let maxCountOfIngradients = 5;
let switcherClicks = 1;
let animDuration = 200;

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
    price: '165$'
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
    price: '60$'
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
    price: '90$'
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
    price: '190$'
}, {
    name: 'Steak',
    ingradients: [{
        ingradient: 'Meat',
        weight: '300gr'
    }, {
        ingradient: 'Specias',
        weight: '10gr'
    }, ],
    price: '200$'
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
    price: '110$'
}]

// setting an ingradients
let setIngradients = (countInArray) => {
    $('.main__card-ingradients').html('');
    for (let i = 0; i != dishes[countInArray].ingradients.length; i++) {
        let countOfThisProd = i + 1;
        $('.main__card-ingradients').append("<div class='main__text-row main__text-row-ingrad" + countOfThisProd + "'></div>");
        $('.main__text-row.main__text-row-ingrad' + countOfThisProd).append("<p class='main__ingradient'>" + dishes[countInArray].ingradients[i].ingradient + "</p>");
        $('.main__text-row.main__text-row-ingrad' + countOfThisProd).append("<p class='main__ingradient-gramm'>" + dishes[countInArray].ingradients[i].weight + "</p>");
        $('.main__price').html(dishes[countInArray].price);
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