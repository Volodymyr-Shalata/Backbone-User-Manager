/**
 * Created by Володимир on 08.08.2015.
 */

define ([
    'jquery',
    'underscore',
    'backbone',
    'MenuView',
    'Models/SessionModel',
    'text!mega_menu',
    'router'

], function($, _, Backbone, MenuView, SessionModel, menu_template, router){
    var LogoutView = Backbone.View.extend({
        render : function(){
            var menuView = new MenuView();
            var session = new SessionModel();
            session.remove('is_logged');
            session.remove('user_role');
            session.remove('user_name');
            session.remove('user_id');
            Backbone.history.navigate('login', {trigger:true});
            var template = _.template(menu_template);
            this.$el.html(template({menuInfo: null}));
            menuView.render();
        }
    });

    return LogoutView;

});