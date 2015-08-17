/**
 * Created by Володимир on 07.08.2015.
 */

require.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        text: 'libs/text',
        home_page : '../templates/home_page.html',
        login: '../templates/users/login.html',
        sign_up: '../templates/users/sign_up.html',
        email_subscribe: '../templates/email_subscribe.html',
        mega_menu: '../templates/mega_menu.html',
        user_list: '../templates/user_list.html',
        edit_user: '../templates/users/edit_user.html',
        MenuView : 'Views/MenuView',
        bootstrap: 'libs/bootstrapDialog',
        confirm :  'libs/jquery.confirm.min',
        cookie: 'libs/jquery.cookie',
        functions: 'functions'
        //BootstrapDialog: "libs/bootstrapDialog",
        //"bootstrap" :"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min",
        //"bootstrapSelect" :"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.7.2/js/bootstrap-select.min"
    },
    shim: {
        'cookie': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'functions' :{
            deps: ['jquery']
        }
    }
    });

require([
    'router',
], function(Router){
    Router.initialize();
});