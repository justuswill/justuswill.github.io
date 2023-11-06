// Responsive website features

// Highlight via illuminating effect
$(function() {
    var bg_color = $('#header-animation').css('background-color');
    var text_gradient = $('.header-text h1 .gradient').css('background');
    var text_style = {
        'background': '',
        'background-clip': 'text',
        '-webkit-background-clip': 'text',
        '-moz-background-clip': 'text',
        '-moz-text-fill-color': 'transparent',
        '-webkit-text-fill-color': 'transparent'
    };
    var x, y, xy, bgWebKit, bgMoz;
    var xt, yt, deg;
    var lightColor = 'rgba(28, 52, 72, 1.0)', gradientSize = 300;
    // var lightColor = 'rgba(30, 40, 48, 1.0)', gradientSize = 300;

    $('#header').mousemove(function(e) {
        var text = $('.header-text h1 .gradient');
        x  = e.pageX - this.offsetLeft;
        y  = e.pageY - this.offsetTop;
        xy = x + ' ' + y;
        bgWebKit = '-webkit-gradient(radial, ' + xy + ', 0, ' + xy + ', ' + gradientSize + ', from(' + lightColor + '), to(rgba(255,255,255,0.0))), ' + bg_color;
        bgMoz    = '-moz-radial-gradient(' + x + 'px ' + y + 'px 45deg, circle, ' + lightColor + ' 0%, ' + bg_color + ' ' + gradientSize + 'px)';
        xt = e.pageX - (text.offset().left + text.width() / 2);
        yt = e.pageY - (text.offset().top + text.height() / 2);
        deg = Math.atan2(-xt, yt) * 180/Math.PI;
        text_style['background'] = 'linear-gradient(' + deg + 'deg, var(--main-color-bright), var(--main-color))'
        $('#header-animation')
            .css({ background: bgWebKit })
            .css({ background: bgMoz });
        text.css(text_style);
    }).mouseleave(function() {
        var text = $('.header-text h1 .gradient');
        $('#header-animation').css({ background: bg_color });
        text.css({background: text_gradient});

        text_style['background'] = text_gradient;
        text.css(text_style);
    });
});

// active tabs
$('.tab-links').on('click', function(){
    $('.tab-links').each(function(){
        $(this).removeClass('active-link');
    });
    $('.tab-contents').each(function(){
        $(this).removeClass('active-tab');
    });
    $(this).addClass('active-link');
    $('#' + $(this).attr('data-open')).addClass('active-tab');
});
$('.nav-open').on('click', function(){
    $('.tab-links').each(function(){
        $(this).removeClass('active-link');
    });
    $('.tab-contents').each(function(){
        $(this).removeClass('active-tab');
    });
    $('#' + $(this).attr('data-tab')).addClass('active-link');
    $('#' + $(this).attr('data-open')).addClass('active-tab');
});

// expand abstract
$('.abstract-expand').on('click', function(){
    var abs = $('#' + $(this).attr('data-open'));
    if (abs.hasClass('active-abstract')){
        abs.removeClass('active-abstract');
        $(this).removeClass('active-abstract-link');

    }
    else{
        abs.addClass('active-abstract');
        $(this).addClass('active-abstract-link');
    }
});

//active projects
$(function(){
    var open = false;
    $('.btn').on('click', function(){
        if(!open){
            $('.project').each(function(){
                $(this).addClass('active-project');
            });
            $('#btn-open').css({display: 'none'});
            $('#btn-close').css({display: 'inline'});
            open = true;
        }
        else{
            $('.project').each(function(){
                if(!$(this).hasClass('start-project')){
                    $(this).removeClass('active-project');
                }
            });
            $('#btn-open').css({display: 'inline'});
            $('#btn-close').css({display: 'none'});
            open = false;
        }
    });
    $('.layer').on('click', function (){
        let proj = $(this).parent();
        if(proj.hasClass('open-project')){
            proj.removeClass('open-project');
        }
        else{
            $('.project').each(function (){
                $(this).removeClass('open-project');
            });
            proj.addClass('open-project');
        }
    });
});

// open/close menu
$('.menu-open').on('click', function(){
    $('nav ul').css({right: '0'});
    $('#menu-open').css({width: '0'});
});
$('.menu-close').on('click', function(){
    $('nav ul').css({right: '-200px'});
    $('#menu-open').css({width: '30px'});
});