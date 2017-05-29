
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
})