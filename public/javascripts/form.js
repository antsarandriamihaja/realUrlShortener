$(document).ready(function () {
    $('#user_form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            userName: {
                validators: {
                    notEmpty: {
                        message: 'Your name is required'
                    }
                }
            },
            address: {
                validators: {
                    notEmpty: {
                        message: 'The address is required'
                    }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: 'The city is required'
                    }
                }
            },
            zipCode: {
                validators: {
                    notEmpty: {
                        message: 'The postal code is required'
                    },
                    regexp: {
                        regexp: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
                        message: 'Please enter a valid canadian postal code.'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required'
                    },
                    regexp: {
                        regexp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'The phone number is required'
                    },
                    regexp: {
                        regexp: /^^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
                        message: 'Please enter a valid phone number.'
                    }
                }
            }
        }
    });
$('#user_form').submit(function(e){e.preventDefault()})
$('#proceed').on('click', function(){
    var bootstrapValidator = $('#user_form').data('bootstrapValidator');
    bootstrapValidator.validate();
    if (bootstrapValidator.isValid()){
         $('.card').removeClass('fadeIn')
        $('.card').addClass('fadeOut')
        console.log('stripe should show')
       setTimeout(function(){
           $('.card').hide()
         $('.stripe').removeClass('hidden')
       },1000)
       
    }
    else return
})
});
