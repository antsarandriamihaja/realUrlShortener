$(document).ready(function(){
    $('.display_number').on('click', function(){
        $('#welcome_message').remove();
        $('.give_number').remove();
        $('.hours').hide()
        $('.page2').removeClass('hidden')
    })
})