$(document).ready(function(){
    $("#signinform").validate({
        rules:{ 
            fname:{
                required:true,
                email:true
            },
            password:{
                minlength:5   
            }     
        }
    })
})