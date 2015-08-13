define([
    'backbone'
], function(Backbone){
    var Home = Backbone.Model.extend({
        urlRoot: './backend/home.php'
    });

    return Home;

});