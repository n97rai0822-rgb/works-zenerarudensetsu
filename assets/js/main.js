'use strict'
{
    // ハンバーガーメニュー
    const nav = document.querySelector('.nav');
    const btnOpen = document.querySelector('.btn__open');
    const btnClose = document.querySelector('.btn__close');
    const navItem = document.querySelectorAll('.nav__item');

    btnOpen.addEventListener('click',function(){
        nav.classList.add('open');
    });

    btnClose.addEventListener('click',function(){
        nav.classList.remove('open');
    });

    for(let i = 0; i < navItem.length; i++){
        navItem[i].addEventListener('click',function(){
            nav.classList.remove('open');
        });
    };


    // 浮き出る
    $(window).on('load', function(){
        $('.float').addClass('active');
    });


    // スクロール
    $(window).on('scroll load', function(){
        var scroll = $(this).scrollTop();
        var windowHeight = $(window).height();
        $('.fadeIn').each(function(){
            var pos = $(this).offset().top;
            if(scroll > pos -windowHeight + windowHeight / 3){
                $(this).addClass('active');
            }
        })
    });

}