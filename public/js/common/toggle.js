/* 
 * @Author slashhuang
 * 17/3/17
 * 所有页面都有的toggle
 */

//头部的toggle
  $(document).ready(function() {
        $('.navbar').click(function() {
            $('header nav').toggleClass('shownav');
        });
        var myWidth = 0;
        function getSize() {
            if (typeof(window.innerWidth) == 'number') {
                myWidth = window.innerWidth;
            } else if (document.documentElement && document.documentElement.clientWidth) {
                myWidth = document.documentElement.clientWidth;
            };
        };
        var m = $('#main'),
            a = $('#asidepart'),
            c = $('.closeaside'),
            o = $('.openaside');
        c.click(function() {
            a.addClass('fadeOut').css('display', 'none');
            o.css('display', 'block').addClass('fadeIn');
            m.addClass('moveMain');
        });
        o.click(function() {
            o.css('display', 'none').removeClass('beforeFadeIn');
            a.css('display', 'block').removeClass('fadeOut').addClass('fadeIn');
            m.removeClass('moveMain');
        });
        $(window).scroll(function() {
            o.css("top", Math.max(80, 260 - $(this).scrollTop()));
        });

        $(window).resize(function() {
            getSize();
            if (myWidth >= 1024) {
                $('header nav').removeClass('shownav');
            } else {
                m.removeClass('moveMain');
                a.css('display', 'block').removeClass('fadeOut');
                o.css('display', 'none');
            }
        });
    });
  // fancy box

   $(document).ready(function() {
        $('.article-content').each(function(i) {
            $(this).find('img').each(function() {
                if ($(this).parent().hasClass('fancybox')) return;
                var alt = this.alt;
                if (alt) $(this).after('<span class="caption">' + alt + '</span>');
                $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
            });
            $(this).find('.fancybox').each(function() {
                $(this).attr('rel', 'article' + i);
            });
        });
        if ($.fancybox) {
            $('.fancybox').fancybox();
        }
    });
   /*scroll top*/
   (function($) {
    
    // When to show the scroll link
    // higher number = scroll link appears further down the page    
    var upperLimit = 1000; 
    // Our scroll link element
    var scrollElem = $('#totop');
    // Scroll to top speed
    var scrollSpeed = 500;
    
    // Show and hide the scroll to top link based on scroll position    
    scrollElem.hide();
    $(window).scroll(function () {             
        var scrollTop = $(document).scrollTop();        
        if ( scrollTop > upperLimit ) {
            $(scrollElem).stop().fadeTo(300, 1); // fade back in            
        }else{        
            $(scrollElem).stop().fadeTo(300, 0); // fade out
        }
    });

    // Scroll to top animation on click
    $(scrollElem).click(function(){ 
        $('html, body').animate({scrollTop:0}, scrollSpeed); return false; 
    });

})(jQuery);