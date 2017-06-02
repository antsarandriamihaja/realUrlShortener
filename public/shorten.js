
$(document).ready(function () {
    $(".btn").hover(
        function () {
            $(this).toggleClass('zoom');
        }
    );
    $('.shorten').prop('disabled', true);
    $('#url-field').keyup(function () {
        $('.shorten').prop('disabled', this.value == "" ? true : false);
    });
    $('#user_url').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            url: {
                validators: {
                    notEmpty: {
                        message: 'A URL to shorten is required'
                    },
                    regexp: {
                        regexp: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
                        message: 'Please enter a valid URL.'
                    }
                }
            }
        }
    })
    $('.shorten').on('click', function () {
        $('#link').html('')
        if ($('.shorter').hasClass('animate')) { $('.shorter').removeClass('animate') }
        $.ajax({
            url: '/api/shorten',
            type: 'POST',
            dataType: 'JSON',
            data: { url: $('#url-field').val() },
            success: function (data) {
                var result = '<a  class = "result" href="' + data.shortUrl + '" target= "_blank">' + data.shortUrl + '</a>';
                $('.loader2').removeClass('hidden');
                setTimeout(function () {
                    $('.loader2').fadeOut();
                     $('.shorter').removeClass('hidden')    
                }, 2500)
                setTimeout(function(){
                    $('#link').html(result);
                },2800)
            }
        });
    });
})
