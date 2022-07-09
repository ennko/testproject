
    // let screenHeight = $(window).height();
    // console.log(screenHeight)

    let sectionHeight = $('section').height();
    // console.log(sectionHeight)

    $(window).scroll(function(){
        let currentHeight = $(this).scrollTop();
        // console.log(currentHeight);
        if(currentHeight > sectionHeight-100){
            $('.site-nav').addClass('site-nav-scroll')   
        }else{
            $('.site-nav').removeClass('site-nav-scroll')
            setActive('home');
        }
 
    });

    $('.navbar-toggler').click(function(){
        let result = $('.navbar-collapse').hasClass('show');
        // console.log(result)
        if(result){
            $('.menu-icon').removeClass('fa-close').addClass('fa-bars');
        }else{
            $('.menu-icon').removeClass('fa-bars').addClass('fa-close')
        }
    });

    function setActive(current){

        $('.nav-link').removeClass('current-section');
        $(`.nav-link[ href="#${current}"]`).addClass('current-section');
    }
    
    function navScroll(){
        let currentSection = $("section[id]");
        // console.log(currentSection);
        currentSection.waypoint(function(direction){
           if(direction == 'down'){
            let currentSectionId = $(this.element).attr('id');
            // console.log(currentSectionId)
            setActive(currentSectionId)
           }
        },{offset: '50px'});

        currentSection.waypoint(function(direction){
            if(direction == 'up'){
             let currentSectionId = $(this.element).attr('id');
            //  console.log(currentSectionId)
             setActive(currentSectionId)
            }
            
         },{offset:'-50px'});
    }
    
    navScroll();

    wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 0,
            mobile: true,
            live: true
        }
    )
    wow.init();

$('.pricing-slick').slick({
    arrows:false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(window).on("load",function () {
    $('.loader-container').fadeIn(500,function () {
        $(this).remove();
    });
});
