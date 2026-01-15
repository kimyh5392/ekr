(function($){

    // gnb 관련
    $(document).on('click', '.btn-nav', function(){
        $('body').addClass('opened');
        $(this).addClass('btn-nav-close');
    });
    $(document).on('click', '.btn-nav-close, .gnb-backdrop', function(){
        $('body').removeClass('opened');
        $('.btn-nav-close').removeClass('btn-nav-close');
        $('#gnb .container > ul > li').removeClass('active');
    });

    $(function() {
        let isMobile = null;
        $(window).on('resize', function () {
            const current = $(window).width() <= 1024;
            if (current !== isMobile) {
                isMobile = current;
                $(document).off('click.gnb mouseenter.gnb mouseleave.gnb');
                if (isMobile) {
                    $(document).on('click.gnb', '#gnb .container > ul > li > a', function (e) {
                        e.preventDefault();
                        const $li = $(this).parent();
                        const isActive = $li.hasClass('active');
                        $('#gnb .container > ul > li').removeClass('active').children('ul').stop(true, true).slideUp();
                        if (!isActive) {
                            $li.addClass('active').children('ul').stop(true, true).slideDown();
                        }
                    });
                } else {
                    $('#gnb .container > ul > li').removeClass('active').children('ul').stop(true, true).removeAttr('style');
                    $(document).on('mouseenter.gnb', '#gnb .container > ul > li', function () {
                        $('#gnb .container > ul > li').removeClass('active');
                        $(this).addClass('active');
                    });
                    $(document).on('mouseleave.gnb', '#gnb .container > ul > li', function () {
                        $('#gnb .container > ul > li').removeClass('active');
                    });
                }
            }
        }).trigger('resize');
    });
    
    // quick-top
    $(document).on('click', '.btn-top', function(e) {
        $('html, body').stop().animate({
            scrollTop: 0
        });
        e.preventDefault();
    });

})(jQuery);