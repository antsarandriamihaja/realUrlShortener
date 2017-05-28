
$(document).ready(function(){
   var ele= $('.give_number');
   ele.hide();
   setTimeout(function(){
       ele.show();
   },1500);
   var user_number = $('.display_number');
   user_number.hide();
   setTimeout(function(){
       user_number.show()
   },3500)
  
})