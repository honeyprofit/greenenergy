$(function(){

    /* arrow */
    $('.arrow').delay(50).animate({
        paddingLeft: 40,
        opacity: 1,
    },1000);


    /* title 옆으로 스르륵 나타나기 */
    $('h2').animate({
        marginLeft: 100,
        opacity: 1,
    },1000);
    $('span').delay(33).animate({
        marginLeft: 100,
        opacity: 1,
    },1000);

    function titleReset(){
        $('h2').css({
            marginLeft: 0,
            opacity: 0,
        });
        $('span').css({
            marginLeft: 0,
            opacity: 0,
        });
    };
    function titleAnimate(){
        $('h2').animate({
            marginLeft: 100,
            opacity: 1,
        },1000);
        $('span').delay(33).animate({
            marginLeft: 100,
            opacity: 1,
        },1000);
    };
 

    
    /* ul.screen_whole_이동 */
    let arrowIndex = 1;
    $('.arrow').click(function(){
        if(arrowIndex==1){
            $('ul.screen_whole').animate({
                left: (-100)*arrowIndex+'%',
            },300);
            $('.wrap').css('background','linear-gradient(0.25turn, #79D9D6, #BCF3F2');
            $('.arrow').css({
                '-webkit-transform': 'scaleX(-1)',
                'transform': 'scaleX(-1)',
                'left': 0,
            });
            titleReset();
            titleAnimate();
            arrowIndex=0;
        }else{
            $('ul.screen_whole').animate({
                left: (-100)*arrowIndex+'%',
            },300);
            $('.wrap').css('background','linear-gradient(0.25turn, #57CCD9, #CEEAF2');
            $('.arrow').css({
                '-webkit-transform': 'scaleX(1)',
                'transform': 'scaleX(1)',
                'left': 'calc(100% - 160px)',
            });
            titleReset();
            titleAnimate();
            arrowIndex=1;
        }
    })

/* wrap2 시작 */
/* yacht */
let yachtPosition = 0;
$('.yacht').click(function(){
    if (yachtPosition === 0) {
        $(this).css({
            'transition': 'transform 3s',
            'transform': 'translateX(-400px)',
        });
        yachtPosition = 1;
    }
    else if (yachtPosition === 1) {
        $(this).css({
            'transition': 'transform 3s',
            'transform': 'translateX(500px)',
        });
        yachtPosition = 2;
    }
    else if (yachtPosition === 2) {
        $(this).css({
            'transition': 'transform 3s',
            'transform': 'translateX(0)',
        });
        yachtPosition = 0;
    }
})

/* balloon */
let balloonIndex = 0;
let isMoving = false;
$('.balloon').click(function(){
    if(isMoving){
        clearInterval(balloonInterval);
        isMoving = false;
    }else{
        balloonInterval = setInterval(function(){
            if(balloonIndex==0){
                $('.balloon').css({
                    'transition': 'transform 2s',
                    'transform': 'translateY(-20px)'
                });
                balloonIndex=1;
            }else{
                $('.balloon').css({
                    'transition': 'transform 2s',
                    'transform': 'translateY(20px)'
                });
                balloonIndex=0;
            }
        },1000);
        isMoving = true;
    }
}
);

/* wind generator */
let wingMoving = false;
$('.wind1 img').click(function(){
    if(wingMoving){
        $('.wind1 img').css({
            'animation': 'none',
        });
        wingMoving=false;
    }else{
        $('.wind1 img').css({
            'animation': 'windRotate .3s infinite linear',
        });
        wingMoving=true;
    }
});

/* dad */
let legIndex1 = 0;
setInterval(function(){
    if(legIndex1==0){
        $('.dad_left').removeClass('after');
        $('.dad_right').removeClass('after');
        legIndex1=1;
    }else{
        $('.dad_left').addClass('after');
        $('.dad_right').addClass('after');
        legIndex1=0
    }
},500);


/* girl */
let legIndex3 = 0;
setInterval(function(){
    if(legIndex3==0){
        $('.girl_left').removeClass('after');
        $('.girl_right').removeClass('after');
        legIndex3=1;
    }else{
        $('.girl_left').addClass('after');
        $('.girl_right').addClass('after');
        legIndex3=0
    }
},700);



/* boy */
let legIndex2 = 0;
setInterval(function(){
    if(legIndex2==0){
        $('.boy_left').removeClass('after');
        $('.boy_right').removeClass('after');
        legIndex2=1;
    }else{
        $('.boy_left').addClass('after');
        $('.boy_right').addClass('after');
        legIndex2=0
    }
},1000);

let boyMoving = false;
$('.boy').click(function(){
    if(boyMoving){
        $('.boy').css({
            'animation': 'none',
        });
        boyMoving=false;
    }else{
        $('.boy').css({
              'animation': 'boyAni 10s infinite linear',
        });
        boyMoving=true;
    }
});


/* mom */
let legIndex4 = 0;
setInterval(function(){
    if(legIndex4==0){
        $('.mom_left').removeClass('after');
        $('.mom_right').removeClass('after');
        legIndex4=1;
    }else{
        $('.mom_left').addClass('after');
        $('.mom_right').addClass('after');
        legIndex4=0
    }
},800);




});/* ready */