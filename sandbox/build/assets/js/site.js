console.log('%c Proudly Crafted with PageStudio CMS.', 'background: #313131; color: #bada55');

/* ---------------------------------------------- /*
 * Preloader
 /* ---------------------------------------------- */
(function(){
    $(window).on('load', function() {
        $('.loader').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    });
    
    $('.js-submit').on('click', function(e){
        e.preventDefault();
        $(this).closest('form').submit();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            url: '/contact/ajax',
            data: data,
            type: 'POST',
            dataType: 'json',
            async: false,
            success: function(response) {
                console.log(response);
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                console.log(err.Message);
            }
        });
    });
})(jQuery);
