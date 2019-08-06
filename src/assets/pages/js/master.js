jQuery(document).ready(function($){
    $('#navChange').on('click',function(e){
        $(this).toggleClass('open');
    });
    //    $('.nav-overlay').on('click',this,function(e){
    //        $('.navbar-toggle').trigger('click');
    //    });

    

    $('.dropdown').hover(function(){
        var parent = $(this);
        parent.find('.sub-menu-wrap').stop().slideDown(300,function(){
            $(this).addClass('open');
        });
    },function(){
        $(this).children('.sub-menu-wrap').stop().slideUp(300, function () {
            $(this).removeClass('open');
       });       
    });
    $('.ratting input[type="range"]').on('change',function(e){
        $(this).parent('.ratting').children('.rate').css('width',$(this).val()+'%');
    });
    $('.panel').on('click','.panel-heading',function(){
        var container = $(this).parent('.panel');
        $(container).siblings().removeClass('on').find('.panel-body').slideUp();
        $(container).find('.panel-body').is(':visible')  ?  
        $(container).removeClass('on').find('.panel-body').slideUp() :
        $(container).addClass('on').find(':hidden').slideDown() ;
        
    });
    
    if($('#slider-quote').length){
        $('#slider-quote').slick({
            dots: true,
            arrows:false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
                    {
                      breakpoint: 480,
                      settings: {
                        
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ]
        });
    }
    if($('#step_register_slider').length){
        $('#step_register_slider').slick({
            dots: false,
            arrows:false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            draggable: false,
            responsive: [
                    {
                      breakpoint: 480,
                      settings: {
                        
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ]
        });
        $('[data-toggle="register-steps"]').on('click',function(){
            var slideIndex = parseInt($(this).index());
            $('#step_register_slider').slick('slickGoTo',slideIndex);
            $(this).addClass('active current').siblings().removeClass('current');
            
            
        });
        
        
    }
    
    
 
         var lastScrollTop = 0;
         $(window).on('scroll', function(){
            var st = $(this).scrollTop();
            if (st > lastScrollTop){
               // downscroll code
                if($('#truck-decor').length){playfunc($('#truck-decor'), 500);}
                
            } else {
              // upscroll code
                if($('#truck-decor').length){playfunc($('#truck-decor'), 500);}
               
            }
            lastScrollTop = st;
              
            
        });

    
    function playfunc(blocks,offset){
            
        blocks.each(function(){
            var trackCont = $(this);
            var winTop = $(window).scrollTop();
//                    top cont && bottom cont
            winTop > trackCont.offset().top - offset  ? trackCont.addClass('gogo') : trackCont.removeClass('gogo');
           
        });
    }
    
    
    
    
    

});