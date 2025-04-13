$(document).ready(function () {

    $(".featured-slider").owlCarousel({
        items: 3,
        margin:20,
        loop: true,
        autoplay: false,
        nav: false,
        dots: false,
        responsive: {
            // For large screens (desktop)
            1200: {
                items: 3.2, // 3 and 20% items on large screens
            },
            // For medium screens (tablets)
            768: {
                items: 3,
            },
            // For small screens (mobile)
            0: {
                items: 2.2, // 1 and 10% item on small screens
                
            }
        }
    });
 
});