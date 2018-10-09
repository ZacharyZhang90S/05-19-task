$(document).ready(function(){
    var allButtons = $('main ul > li')
    for(let i = 0;i < allButtons.length; i++) {
        $(allButtons[i]).click(function(x) {
            $(allButtons[i]).addClass('active')
            .siblings('.active').removeClass('active')
            var index = $(x.currentTarget).index()
            var p = index * -920
            $('.imgSlide').css({
            transform: 'translate(' + p + 'px)'
            })
        })
    }
});