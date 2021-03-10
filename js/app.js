$('.banner-content').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    // autoplay:true,
    // autoplayTimeout:5000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// $( ".on" ).click(function() {
//   $( this ).replaceWith( "<div>" + $( this ).text() + "</div>" );
// });