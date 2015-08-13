define([
    'backbone'
], function(Backbone){

    var Emails = Backbone.Model.extend({
        url: './backend/email.php',
        validate_email: function(){
            var errors = {};
            var emailVal = $("#emailField").val();
            var valid_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if(!emailVal.match(valid_email)){
                errors = {error: "Please, enter the valid email", email: emailVal};
            }else{
                errors = {error: "", email: emailVal};
            }
            return errors;
        }
    });

    return Emails;

});