/**
 * Created by Володимир on 08.08.2015.
 */

define ([
    'jquery',
    'underscore',
    'backbone',
    'MenuView',
    'Models/SessionModel',
    'Models/Home',
    'Models/UserLogin',
    'text!login'

], function($, _, Backbone, MenuView, SessionModel,HomeModel, UserLoginModel, login_template){
    var LoginView = Backbone.View.extend({
        el: '.page',
        events:{
            'click #loginBtn': 'login_press'
        },
        render: function(loginData){
            var userLogin = new UserLoginModel();
            var that = this;
            var session = new SessionModel();
            var homePage = new HomeModel();
            if(session.get('is_logged')){
                var params = {};
                params.is_logged = session.get('is_logged') || null;
                params.user_name = session.get('user_name') || null;
                homePage.render(params);
            }
            if(loginData){
                var menu = new MenuView();
                userLogin.save(loginData,
                    {success: function(data){
                        var template = _.template(login_template);
                        that.$el.html(template({login: data}));
                        if(data.attributes.error == ""){
                            session.save('user_id', data.attributes.id);
                            session.save('is_logged', data.attributes.is_loged_in);
                            session.save('user_role', data.attributes.role);
                            session.save('user_name', data.attributes.userName);
                            menu.render(data.attributes.is_loged_in, data.attributes.role);
                            switch(data.attributes.role){
                                case "admin": {
                                    Backbone.history.navigate('userManager', {trigger:true});
                                    break;
                                };
                                case "owner": {
                                    Backbone.history.navigate('userManager', {trigger:true});
                                    break;
                                };
                                case "user": {
                                    Backbone.history.navigate('home', {trigger:true});
                                };
                            }
                        }else{
                            menu.render(null);
                        }
                    }}
                )
            }else{
                var template = _.template(login_template);
                that.$el.html(template({login: null}));
            }
        },
        login_press: function(e){
            e.preventDefault();
            var loginData = $("#login").serializeObject();
            if(loginData.length !=0){
                this.render(loginData);
            }
        }
    });

    return LoginView;

});

