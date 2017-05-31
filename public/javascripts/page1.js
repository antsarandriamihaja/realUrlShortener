
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
        console.log('inside if statemet executed')
        setTimeout(function () {
            ele.show();
        }, 1500);

        setTimeout(function () {
            user_number.show()
        }, 3500)
    }
    else {
        console.log('inside else statement executed')
        close.show()
    }
    user_number.on('click', function(){
        $('.welcome_message').addClass('hidden')
        $('.hours').addClass('hidden');
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
            if (val === 67){
                clearInterval(interval); 
            }
        },5000)
        setTimeout(function(){
            $('.display_number').hide();
            $('.now_serving').hide();
            $('.card').removeClass('hidden')
        },11000)
    })
})