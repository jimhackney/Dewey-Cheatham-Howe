$(function() {
    //auto play video modal
    //when the a tag with the video class is clicked, 
    //the function is called which opens the video in the modal
    //and set autoplay to 1
    $(".video").click(function() {
        var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + 
        "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr("src", videoSRCauto);
        $(theModal + ' button.close').click(function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});

//ekko lightbox 
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//initalize slick
$('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000
});