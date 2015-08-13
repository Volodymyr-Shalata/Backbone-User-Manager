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
    'text!home_page'

], function($, _, Backbone, MenuView, SessionModel,HomeModel, home_page_template){

    var HomePage = Backbone.View.extend({
        el: '.page',
        render: function(){
            var session = new SessionModel();
            var megaMenu = new MenuView();
            var userName = session.get('user_name');
            var is_logged = session.get('is_logged');
            var home = new HomeModel();
            var that = this;
            home.fetch({
                success: function(data){
                    if(is_logged && userName){
                        data.userName = userName;
                    }
                    var template= _.template(home_page_template);
                    that.$el.html(template({data: data}));
                }});
            megaMenu.render();
        }
    });

    return HomePage;

});
