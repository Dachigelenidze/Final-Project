$('.owl-carousel').owlCarousel({
    loop:true, 
    margin:0,
    nav:true,
    dots: true,
    autoplay:true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive:{
        // 0:{
        //     items:1
        // },
        600:{
            items:1
        },
        // 1000:{
        //     items:5
        // }
    }
})