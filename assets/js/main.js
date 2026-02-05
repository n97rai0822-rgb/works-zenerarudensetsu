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


    // マウスオーバーしたら行う動作
    $('.business__txtGroup__01').on("mouseover",function(){
        // ナンバーの文字色を変更
        $('.number__01').css({
            color : "#FFF", 
        });
        // 画像のスケールを大きくする
        $('.business__img__01').addClass("imgZoom");
    });
    $('.business__txtGroup__02').on("mouseover",function(){
        // ナンバーの文字色を変更
        $('.number__02').css({
            color : "#FFF", 
        });
        // 画像のスケールを大きくする
        $('.business__img__02').addClass("imgZoom");
    });
    $('.business__txtGroup__03').on("mouseover",function(){
        // ナンバーの文字色を変更
        $('.number__03').css({
            color : "#FFF", 
        });
        // 画像のスケールを大きくする
        $('.business__img__03').addClass("imgZoom");
    });

    // マウスアウトしたら行う動作
    $('.business__txtGroup__01').on("mouseout",function(){
        // ナンバーの文字色を変更
        $('.number__01').css({
            color : "#005AA4", 
        });
        // 画像のスケールを大きくする
        $('.business__img__01').removeClass("imgZoom");
    });
    $('.business__txtGroup__02').on("mouseout",function(){
        // ナンバーの文字色を変更
        $('.number__02').css({
            color : "#005AA4", 
        });
        // 画像のスケールを大きくする
        $('.business__img__02').removeClass("imgZoom");
    });
    $('.business__txtGroup__03').on("mouseout",function(){
        // ナンバーの文字色を変更
        $('.number__03').css({
            color : "#005AA4", 
        });
        // 画像のスケールを大きくする
        $('.business__img__03').removeClass("imgZoom");
    });

}