
define ([
    'jquery',
    'underscore',
    'backbone',
    'MenuView',
    'Models/Registration',
    'text!sign_up'

], function($, _, Backbone, MenuView, Registration, sign_up_template){
    var SignUp = Backbone.View.extend({
        el:'.page',
        render: function(){
            var template = _.template(sign_up_template);
            this.$el.html(template({}));
        },
        events:{
            'click #register': 'register'
        },
        register: function(ev){
            ev.preventDefault();
            var registerData = {};
            var formData = $("[name = 'sign_up']").find(":input");
            formData.each(function(){
                registerData[$(this).attr('name')] = $(this).val();
            });
            var registr = new Registration();
            registr.save(registerData,{success: function(){
            }});
        }
    });

    return SignUp;

});


