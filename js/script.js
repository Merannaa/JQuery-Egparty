$('.nav-open').click(function(){
    let sideWidth=$('#sideNav').css('width')
    // console.log(sideWidth);
    $('#sideNav').animate({
        width: sideWidth == '0px' ? sideWidth ='250px' : '0px'
    },1000)
    let marginOpen =$('.nav-open').css('marginLeft')
    console.log(marginOpen);
    $('.nav-open').animate({
        marginLeft: marginOpen == '0px' ? marginOpen ='250px' : '0px'
    },1000)
})

$('.closeMenu').click(function(){
    $('#sideNav').animate({
        width: '0px'
    },1000)
    $('.nav-open').animate({
        marginLeft: '0px'
    },1000)
})

// scroll smoothing
$('#sideNav a').not('.closeMenu').click(function() {
    let sectionId = $(this).attr('href');

    let sectionTop = $(sectionId).offset().top;
    scrollSection = sectionTop - 50;

    $("html, body").animate({
        scrollTop: scrollSection < 0 ? scrollSection = 0 : scrollSection
    }, 2000)
})

$('.toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(1000)
    $(this).next().slideToggle(1000)
})


window.onload = function(){
countTime("28 August 2024 10:00:00")
}
function countTime(countTo){
    let nowDate = new Date();
    nowDate = (nowDate.getTime()/1000); 

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000); 

    timeDifference = (futureDate- nowDate); 
    
    let days = Math.floor( timeDifference / (24*60*60)); 
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600); 
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


$(".days").html(days < 10 ? `0${days} ` : `${days}`);
$(".hours").html(hours < 10 ? `0${hours} ` : `${hours}`);
$(".minutes").html(mins < 10 ? `0${mins} ` : `${mins}`);
$('.seconds').html(secs < 10 ? `0${secs} ` : `${secs}`)


setInterval(function() {
    countTime(countTo);
    }, 1000);
}

let maxLength = 100;
$("textarea").attr("maxlength", maxLength);
$("textarea").keyup(function() {
    let length = $(this).val().length;
    let remainingChar = maxLength - length;
    if (remainingChar <= 0) {
        $("#num").text("you passed limit");
    }else {
        $("#num").text(remainingChar);
    }
})