$('.mainCategory .headPanel').click(function () {
    $(this).toggleClass('opened');
    $(this).next().stop(true, true).slideToggle('fast');
    $('.mainCategory .headPanel').not(this).removeClass('opened').next().stop(true, true).slideUp('fast');
    $('.subCategory .subStats').removeClass('opened').next().stop(true, true).slideUp('fast')
})
$('.subCategory .subStats').click(function () {
    $(this).toggleClass('opened');
    $(this).next().stop(true, true).slideToggle('fast');
    $('.subCategory .subStats').not(this).removeClass('opened').next().stop(true, true).slideUp('fast');
})

$('.contentBar .userInfo .detailsBlock').click(function () {
    var dataId = $(this).data('workers');
    var divElem = $(this).closest('.userInfo').find('div');
    for ( var i = 0; i < divElem.length; i++ ){
        if (divElem.eq(i).data('parent') == dataId){
            divElem.eq(i).addClass('show')
        }
    }
})
$(".contentBar .userInfo .detailsBlock .buttons a").click(function(e) {
    e.stopPropagation();
});

$(".mainContent .detailsBlock .openInfo").click(function () {
    $('.mainContent').fadeOut();
    $('.workerInfo').fadeIn();
})
$(".workerInfo .head a, .workerInfo .tabs .closeBtn").click(function () {
    $('.mainContent').fadeIn();
    $('.workerInfo').fadeOut();
})