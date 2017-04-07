/* Yob Slider Functions */
function playSlider() {

    if ($('.slideyob .control_active').next('div').length) {
        $('.slideyob .control_active').next('div').trigger('click');
    } else {
        $(".slideyob .control").eq(0).trigger('click');
    }
    if ($(".bullet .active").next('a').length) {
        $(".bullet .active").next().trigger('click');
    } else {
        console.log($(".bullet .active").next('a'));
        $(".bullet a").eq(0).trigger('click');
    }
}

function stopSlider() {
    clearInterval(slider);
}

/* endSlider */
var sizeMobile = function() {
    $(".bullet a").click(function() {

        $(".bullet .active").removeAttr('class');
        $(this).addClass('active');
        $("#list-img img").css('display', 'none');
        $("#list-img img").eq($(this).index()).css('display', 'block');
        $(".slideyob .control").css('display', 'none');
        $(".slideyob .control").eq($(this).index()).css('display', 'block');
    });
}
var sizeDesktop = function() {

    $(".slideyob .control").click(function() {
        $('.slideyob .control').removeClass('control_active');
        $(this).addClass('control_active');
        $("#list-img img").css('display', 'none');
        $("#list-img img").eq($(this).index()).css('display', 'block');
    });
    $(".slideyob .control").hover(function() {
        $(this).trigger('click');
    });
    $(".slideyob .control").eq(0).trigger('click');
    $('.arrow a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });


}
$(document).ready(function() {

    function setFunctionsResize() {
        if ($(".bullet").css("display") == "block") {
            sizeMobile();
        } else {
            sizeDesktop();
        }
    }
    setFunctionsResize();
    $(window).resize(setFunctionsResize);
    var slider = setInterval(function() {
        playSlider()
    }, 5000);
});