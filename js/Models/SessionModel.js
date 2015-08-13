define([
    'jquery',
    'backbone',
    'cookie'
], function($,Backbone){

    var SessionModel = Backbone.Model.extend({
        defaults:{
            'user_id': null,
            'is_logged': false,
            'user_name': null,
            'user_role': null
        },
        initialize: function(){
            this.load();
        },
        load: function(){
            this.user_id = $.cookie('user_id');
            this.is_logged = $.cookie('is_logged');
            this.user_name = $.cookie('user_id');
            this.user_role = $.cookie('user_role');
        },
        save: function(name, value){
            switch(name){
                /// Session not working correctle because didn`t put break after case statement
                case 'user_id'  :{$.cookie('user_id', value);break;}
                case 'is_logged':{$.cookie('is_logged', true);break;}
                case 'user_name':{$.cookie('user_name', value);break;}
                case 'user_role':{$.cookie('user_role', value);break;}
            }
        },
        get: function(name){
            return $.cookie(name);
        },
        remove: function(name){
            return  $.removeCookie(name);
        }
    });
    return SessionModel;

});