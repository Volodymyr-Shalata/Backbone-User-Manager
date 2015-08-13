/**
 * Created by Володимир on 07.08.2015.
 */

// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
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
        //'plugins\chosen': {
        //    deps: [ 'jquery' ],
        //    exports: 'jQuery.fn.chosen'
        //},
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
    // Load our router module and pass it to our definition function
    'router',
], function(Router){
    // The "router" dependency is passed in as "Router"
    Router.initialize();
});