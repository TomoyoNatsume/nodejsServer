$().ready(function(){
    if ('ontouchstart' in window) {
        var click = 'touchstart';
    } else {
        var click = 'click';
    };
    $('div.burger').on(click, function () {
        if (!$(this).hasClass('open')) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    function openMenu() {
        $('div.burger').addClass('open');
        $('div.screen').addClass('animate');
        setTimeout(function () {
            $('div.x').addClass('rotate30');
            $('div.z').addClass('rotate150');
            $('.menu').addClass('animate');
            setTimeout(function () {
                $('div.x').addClass('rotate45');
                $('div.z').addClass('rotate135');
            }, 100);
        }, 10);
    }
    function closeMenu() {
        $('div.screen, .menu').removeClass('animate');
        $('div.burger').removeClass('open');
        $('div.x').removeClass('rotate45').addClass('rotate30');
        $('div.z').removeClass('rotate135').addClass('rotate150');
        setTimeout(function () {
            $('div.x').removeClass('rotate30');
            $('div.z').removeClass('rotate150');
        }, 50);
        setTimeout(function () {
            $('div.x, div.z').removeClass('collapse');
        }, 70);
    }
});
