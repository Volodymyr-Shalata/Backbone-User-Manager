/**
 * Created by Володимир on 08.08.2015.
 */


define([
    'jquery',
    'underscore',
    'backbone',
    'text!email_subscribe',
    'Models/Email',
    'bootstrap'

], function($, _, Backbone, subscribe_template, EmailModel,BootstrapDialog){

    var SubscrEmail = Backbone.View.extend({
        el: ' .email_subscription',
        render: function(email, error){
            if(email != null && typeof error != undefined){
                var template = _.template(subscribe_template);
                if(typeof email.attributes.error != undefined ){
                    this.$el.html(template({email: email, error:null}));

                    var confEmail = new EmailModel();
                    $(".confirm").click(function(){
                        BootstrapDialog.confirm({
                            type: BootstrapDialog.TYPE_WARNING,
                            title: 'Unsubscribing',
                            message: 'Do you want to unsubscribe from newsletter?',
                            closable: true,
                            draggable: true,
                            btnOKLabel: 'Yes',
                            btnCancelLabel: 'No',
                            btnOKClass: 'btn-warning',
                            callback: function(result) {
                                if(result) {
                                    confEmail.save({email :email.attributes.email, operation: 'unsubscr'},{success:function(data){
                                        if(data.attributes.unsubscr){
                                            BootstrapDialog.show({
                                                type: this.TYPE_SUCCESS,
                                                title: 'Unsubscribing confirmation',
                                                message: 'You are successfully unsubscribed from the newsletter!',
                                                buttons: [{
                                                    id: 'btn-ok',
                                                    label: 'OK',
                                                    cssClass: 'btn-success',
                                                    autospin: false,
                                                    action: function(dialogRef){
                                                        dialogRef.close();
                                                    }
                                                }]
                                            });
                                        }else{
                                            BootstrapDialog.show({
                                                type: this.TYPE_WARNING,
                                                title: 'Error!',
                                                message: 'Error... Please, try again later'
                                            });
                                        }
                                        el.addClass('hide');
                                    }});
                                }else {
                                    el.addClass('hide');
                                }
                            }
                        });
                    });
                }
            }else{
                // render by default
                var template = _.template(subscribe_template);
                this.$el.html(template({email: null, error:null}));
            }
            //render in case email is not valid
            if(error){
                var template = _.template(subscribe_template);
                this.$el.html(template({email:null,error: error}));
            }
        },

        events:{
            'submit .subscribe-email': 'addEmail'
        },

        addEmail: function(){
            var that = this;
            var email = new EmailModel();
            var errors = email.validate_email();
            if(errors.error =='' && errors.email){
                email.save({'email': errors.email, operation: 'addEmail'}, {success:function(email){
                    that.render(email);
                }});
            }else{
                that.render(null,errors.error);
            }
            return false;
        }
    });

    return SubscrEmail;

});