$(document).ready(function(){
    setTimeout(function(){
        $('.loader').fadeOut();
    },3500)
    setTimeout(function(){
        $('.thankYou').removeClass('hidden')
    },4000)
    setTimeout(function(){
        $('.processing').fadeOut();
        
    },7000)
    setTimeout(function(){
        $('.card').removeClass('hidden')
    },7500)
})