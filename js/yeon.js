$(function(){
    // 메뉴 fixed
    var hd = $('header'),
        win = $(window);

    win.scroll(function(){
        win = $(this)
        win_top = win.scrollTop();
        
        if(win_top > 0) {
            hd.addClass('fixed');
        }else{
            hd.removeClass('fixed');
        };

        var win_h = win.height(),
            skills = $('.skills_left').offset().top;

        if(win_top >= skills - 400){
            $('.skills_bar').addClass('ani')
        }else{ 
            $('.skills_bar').removeClass('ani')
        }
    })

    

    $('.btn_nav').click(function(){
        $(this).toggleClass('on');
        $('#navWrap').toggleClass('active');
    });

    $('.works1 .popup').click(function(){
        $('.works1').show();
        $('body').toggleClass('no-scroll');
    }); 
    $('.works2 .popup').click(function(){
        $('.works2').show();
        $('body').toggleClass('no-scroll');
    });  
    $('.works3 .popup').click(function(){
        $('.works3').show();
        $('body').toggleClass('no-scroll');
    })  
    $('.works4 .popup').click(function(){
        $('.works4').show();
        $('body').toggleClass('no-scroll');
    })  
    $('.works5 .popup').click(function(){
        $('.works5').show();
        $('body').toggleClass('no-scroll');
    })  
    $('.works6 .popup').click(function(){
        $('.works6').show();
        $('body').toggleClass('no-scroll');
    })  
    $('.btn_close').click(function(){
        $('.view_layer').hide();
        $('body').removeClass('no-scroll');
    });  
    
   

    $('.worksInner .btn_wrap').click(function(){
        $(this).parent().toggleClass('active');

        if($('.worksInner .btn_wrap').parent().hasClass('active')){
            $('.btn_more').text('LOAD LESS');
        }else{
            $('.btn_more').text('LOAD MORE');
        }
    });

})    