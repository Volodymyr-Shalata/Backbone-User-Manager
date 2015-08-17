/**
 * Created by Володимир on 08.08.2015.
 */

define ([
    'jquery',
    'underscore',
    'backbone',
    'text!edit_user',
    'Models/User',
    'functions'
], function($,_, Backbone, editUserTemplate, UserModel){

    var EditUser = Backbone.View.extend({
        el: '.page',

        render: function(option){
            var that = this;
            if(option.id){
                that.user = new UserModel({id : option.id});
                that.user.fetch({
                    success:function(user){
                        var template = _.template(editUserTemplate);
                        that.$el.html(template({user: user}));
                    }});
            }else{
                var template = _.template(editUserTemplate);
                that.$el.html(template({user: null}));
            }
        },

        events:{
            'submit .edit-user-form': 'saveUser',
            'click .delete': 'deleteUser'
        },

        saveUser: function(ev){
            var userDetails = $(ev.currentTarget).serializeObject();
            var user = new UserModel();
            user.save(userDetails,{success: function(){
                Backbone.history.navigate('userManager',{trigger:true});
            },
                error: function(e){console.log(e);}
            });
            return false;
        },
        deleteUser:function(ev){
            this.user.destroy({
                success: function(){
                    Backbone.history.navigate('userManager',{trigger:true});
                }})
            return false;
        },wait:true
    });

    return EditUser;

});