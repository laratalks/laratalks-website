var ie = (function(){

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 4 ? v : false;

}());

var touch = (function(){
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
}());

/**
 * Add Helper Classes
 */
if( ie && ie < 9 ) {
    $('body').addClass('ie');
}

if( touch ) {
    $('body').addClass('touch');
}


function laraTalkOnMapReady()
{

    loadGoMap();

    if( $('.map-container').length > 0 )
    {
        var $map = $('.map-container'),
            mapOptions = {
                zoom               : 8,
                center             : new google.maps.LatLng(35.70553,51.404642),
                mapTypeId          : google.maps.MapTypeId.ROADMAP,
                zoom               : 16,
                disableDefaultUI   : true,
                scrollwheel        : false,
                zoomControl        : true,
                zoomControlOptions : {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.LEFT_TOP
                }
            },

            map = new google.maps.Map($map[0], mapOptions),

            marker = new google.maps.Marker({
                position : new google.maps.LatLng(35.70553,51.404642),
                map      : map,
                title    : 'Laratalks Iran'
            });
    }
}