/**
 * Created by Володимир on 08.08.2015.
 */

define ([
    'jquery',
    'underscore',
    'backbone',
    'text!user_list',
    'Models/SessionModel',
    'Models/User',
    'router'

], function($, _, Backbone, user_list_template, SessionModel, UserModel, router){

    var UserList = Backbone.View.extend({
        el: '.page',
        render: function(){
            var self = this;
            var users = new UserModel();
            var session = new SessionModel();
            //Check if user logged in
            if(!session.get('is_logged')){
                Backbone.history.navigate('login',{trigger:true});
                if(session.get('role') != 'owner'){
                    Backbone.history.navigate('home', {trigger:true});
                }
            }else{
                users.fetch({success:function(users){
                    var template = _.template(user_list_template);
                    self.$el.html(template({'users': users.attributes}));
                }});
            }
        }
    });

    return UserList;

});