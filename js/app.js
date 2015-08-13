/**
 * Created by Володимир on 07.08.2015.
 */

// Filename: app.js
require([
    'jquery',
    'underscore',
    'backbone',
    'router', // Request router.js
    'cookie',
    'bootstrap',
    'functions'
], function($, _, Backbone, Router){
    var initialize = function(){
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    }

    return {
        initialize: initialize
    };
});