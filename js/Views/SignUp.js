
define ([
    'jquery',
    'underscore',
    'backbone',
    'MenuView',
    'Models/Registration',
    'text!sign_up',
    'bootstrap',
    'validator'

], function($, _, Backbone, MenuView, Registration, sign_up_template){
    var SignUp = Backbone.View.extend({
        el:'.page',
        render: function(){
            var template = _.template(sign_up_template);
            this.$el.html(template({}));
            $('#sign_up').validate({
                rules: {
                    first_name: {
                        minlength: 4,
                        maxlength: 15,
                        required: true
                    },
                    last_name: {
                        minlength: 3,
                        maxlength: 15,
                        required: true
                    },
                    age: {
                        required: true,
                        number: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        rangelength:[8,12]
                    },
                    confirm_password: {
                        equalTo:'#password'
                    }
                },
                highlight: function(element) {
                    $(element).closest('.form-group').addClass('has-error');
                },
                unhighlight: function(element) {
                    $(element).closest('.form-group').removeClass('has-error');
                },
                errorElement: 'span',
                errorClass: 'help-block',
                errorPlacement: function(error, element) {
                    if(element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                }
            });
        },
        events:{
            'click #register': 'register'
        },
        register: function(ev){
            var error = false;
            var registerData = {};
            ev.preventDefault();
            $.each($('.form-group'), function(){
                if($(this).hasClass('has-error')){
                    error = true;
                }
            });
            if(error){
                return false;
            }else{
                var formData = $("[name = 'sign_up']").find(":input");
                formData.each(function(){
                    registerData[$(this).attr('name')] = $(this).val();
                });
                var registr = new Registration();
                registr.save(registerData,{success: function(){
                    Backbone.history.navigate('#/login',{trigger:true});
                }});
            }
        }
    });

    return SignUp;

});


