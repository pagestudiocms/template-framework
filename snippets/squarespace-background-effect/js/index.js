var $img = $('img');

$img.on('mousemove', function(event) {

  var styles = {
    '-webkit-transform': 'translate3d(' + (event.pageX / -64) + 'px,' + (event.pageY / -64) + 'px,0)',
    '-moz-transform': 'translate3d(' + (event.pageX / -64) + 'px,' + (event.pageY / -64) + 'px,0)',
    '-o-transform': 'translate3d(' + (event.pageX / -64) + 'px,' + (event.pageY / -64) + 'px,0)',
    'transform': 'translate3d(' + (event.pageX / -64) + 'px,' + (event.pageY / -64) + 'px,0)'
  };

  $img.css(styles);
});

window.ondeviceorientation = function(event) {
  var alpha = Math.round(event.alpha), 
      beta = Math.round(event.beta),
      gamma = Math.round(event.gamma),
      phoneStyles = {
    'webkit-transform': 'translate3d(' + (beta / 4) + 'px,' + (gamma / 4) + 'px,0)',
    '-moz-transform': 'translate3d(' + (beta / 4) + 'px,' + (gamma / 4) + 'px,0)',
    '-o-transform': 'translate3d(' + (beta / 4) + 'px,' + (gamma / 4) + 'px,0)',
    'transform:': 'translate3d(' + (beta / 4) + 'px,' + (gamma / 4) + 'px,0)'
  };
  
  $img.css(phoneStyles);
};