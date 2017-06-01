
$(document).ready(function () {
    var close = $('.closed')
    var ele = $('.give_number');
    var user_number = $('.display_number');
    ele.hide()
    close.hide()
    user_number.hide();
    var day = moment().format('ddd');
    var time = moment().format('H');
    if( (time >= 10 && time <= 15)&& !(time>11 && time<13) && !(day === 'Sat') && !(day ==='Sun')) {
        setTimeout(function () {
            ele.show();
        }, 1500);

        setTimeout(function () {
            user_number.show()
        }, 3500)
    }
    else {
        close.show()
    }
    user_number.on('click', function(){
        $('.welcome_message').addClass('hidden')
        $('.hours').addClass('swashOut');
        $('.give_number').addClass('exiting')
        setTimeout(function(){
            $('.give_number').hide()
        },500)
        setTimeout(function(){
            $('.now_serving').removeClass('hidden')
        },600)
        var $count = $('#count');
        var interval = setInterval(function(){
            var val = parseInt($count.html());
            val++
            $count.html('0'+val);
            $('.counting').addClass('blink-3')
            if (val === 67){
                clearInterval(interval); 
            }
        },10000)
        setTimeout(function(){
            $('.display_number').addClass('swashOut');
            $('.now_serving').removeClass('swashIn').addClass('swashOut');
            setTimeout(function(){
                $('.card').removeClass('hidden')
            },1000)
        },21000)
    })
})