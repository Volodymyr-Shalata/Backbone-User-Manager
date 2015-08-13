/**
 * Created by Володимир on 08.08.2015.
 */
//debugger;
define([
    'jquery',
    'underscore',
    'backbone',
    'text!mega_menu',
    'Models/SessionModel'
], function($, _, Backbone, megaMenu, SessionModel){

    var MenuView = Backbone.View.extend({
        el: '.mega_menu',

        render: function(is_logged, role){
            var menuInfo = {};
            var session = new SessionModel();
            if(session.get('is_logged') && session.get('user_role')) {
                menuInfo.is_logged = session.get('is_logged');
                menuInfo.role = session.get('user_role');
                var template = _.template(megaMenu);
                this.$el.html(template({menuInfo: menuInfo}));
            }else{
                var template = _.template(megaMenu);
                this.$el.html(template({menuInfo: null}));
            }
        }
    });

    return MenuView;

});