
$(document).ready(function () {
    $(".btn").hover(
  function () {
    $(this).toggleClass('zoom');
  }
  );
    var close = $('.closed')
    var ele = $('.give_number');
    var user_number = $('.display_number');
    ele.hide()
    close.hide()
    user_number.hide();
    var day = moment().format('ddd');
    var time = moment().format('H');
    if ((time >= 10 && time <= 15) && !(time > 11 && time < 13) && !(day === 'Sat') && !(day === 'Sun')) {
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
    user_number.on('click', function () {
        $('.welcome_message').fadeOut()
        $('.hours').addClass('swashOut');
        $('.give_number').fadeOut().hide();
        $('.display_number').addClass('xaxis');
        $('.user_number').addClass('yaxis');
        $('.now_serving').removeClass('hidden');
        user_number.attr("disabled", "disabled").off('click');
        var $count = $('#count');
        var interval = setInterval(function () {
            var val = parseInt($count.html());
            val++
            $count.html('0' + val);
            $('.counting').addClass('blink-3')
            if (val === 67) {
                clearInterval(interval);
            }
        }, 10000)
        setTimeout(function(){
            $('.display_number').fadeOut();
            $('.now_serving').removeClass('swashIn').addClass('swashOut');
            setTimeout(function(){
                $('.card').removeClass('hidden')
            },1000)
        },21000)
    })
})