let menuTrigger = false;

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