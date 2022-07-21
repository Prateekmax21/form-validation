$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();    
    $('#confirmpasswordvalidation').hide();

    var Error=true;
    var password_error=true;
    var confirm_password_error=true;

    $('#username').keyup(function(){
        username_validation();
    });

    function username_validation(){
        var username_val=$('#username').val();
        if(username_val.length==''){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Cannot be Empty');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }
        if(username_val.length<4){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username should cantain atleast 4 characters');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }
    }
    $('#password').keyup(function(){
        password_validation();
    });

    function password_validation(){
        var password_val=$('#password').val();
        if(password_val.length==''){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password Cannot be Empty');
            $('#passwordvalidation').css('color','red');
            password_Error=false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
        }
        if(password_val.length<7){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Please type password in correct format ');
            $('#passwordvalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('passwordvalidation').hide();
        }
    }
    $('#confirmpassword').keyup(function(){
        confirm_password();
    });

    function confirm_password(){
        var confirm_password_val=$('#confirmpassword').val();
        if(password_val=confirm_password_val){
            $('confirmpasswordvalidation').show();
            $('confirmpasswordvalidation').html('Password did not match');
            $('confirmpasswordvalidation').css('color','red');
            confirm_password_error=false;
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide();
        }
    }
    $('#submitvalidation').click(function(){

        username_validation();
        password_validation();
        confirm_password();

        if(Error==true && password_error==true && confirm_password_error==true){
                return true
        }
        else{
         return false
        }

});