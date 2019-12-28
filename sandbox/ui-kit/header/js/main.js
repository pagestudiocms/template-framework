;(function () {
	
	'use strict';
	
	/**
	 * Detect the current active responsive breakpoint in Bootstrap
	 * @returns {string}
	 * @author farside {@link https://stackoverflow.com/users/4348232/hckr}
	 * @see https://stackoverflow.com/a/39552462
	 */
	function getBootstrapBreakpoint(){
	  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	  return (w < 768) ? 'xs' : ((w < 992) ? 'sm' : ((w < 1200) ? 'md' : 'lg'));
	}
  
	function initMobileNavOverlay($mobileNavToggler){
    if(typeof $mobileNavToggler === 'undefined'){
      console.log('Error: unable to initialize the overlay');
      return;
    }
	  let breakpoint = getBootstrapBreakpoint();
	  let targetOriginal = $mobileNavToggler[0].dataset.targetOriginal;
	  switch(breakpoint){
		case 'xs':
		  $mobileNavToggler[0].dataset.target = `#${targetOriginal}-overlay`;
		  $mobileNavToggler[0].dataset.toggle = `modal`;
		  initMobileNavOverlayEvent(targetOriginal);
		break;
		default:
		  $mobileNavToggler[0].dataset.target = `#${targetOriginal}`;
		  $mobileNavToggler[0].dataset.toggle = 'collapse';
	  }
	}
  
	function initMobileNavOverlayEvent(el){
	  if(typeof window.initMobileOverlay === 'undefined'){
		$(`#${el}-overlay`).on('show.bs.modal', function(e){
		  var target = e.currentTarget;
		  var $modalContent = $(target).find('.mobile-nav-body');
		  const excludes = ['navbar-left', 'navbar-right'];
  
		  if(typeof $modalContent.find('.navbar-nav')[0] === 'undefined'){
			var $topNav = $(`#${el}`);
			var list = $topNav.clone();
			list.children().each(function(k,el){
			  el.classList.remove(...excludes);
			  $(target).find('.mobile-nav-body').append(el);
			});
		  }
  
		  $('#navbar-nav-toggle').removeClass('collapsed');
		  $('body').addClass('mobile-overlay-visible');
		});
		$(`#${el}-overlay`).on('hide.bs.modal', function(e){
		  $('#navbar-nav-toggle').addClass('collapsed');
		  $('body').removeClass('mobile-overlay-visible'); 
		});
		window.initMobileOverlay = true;
	  }
	}
  
	$(window).resize(function(){
	  initMobileNavOverlay();
	});
  
  $(document).ready(function(){
    $('[data-navbar-type="overlay"]').each(function(key, nav){
      var $el = $(nav).find('.navbar-toggle');
      $(this).addClass('navbar-overlay');
      initMobileNavOverlay($el);
      $(window).resize(function(){
        initMobileNavOverlay($el);
      });
    });
  });
}());