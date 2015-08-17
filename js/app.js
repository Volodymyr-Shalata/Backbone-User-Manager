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
        // Call initialize function for router after initializing it
        Router.initialize();
    }

    return {
        initialize: initialize
    };
});