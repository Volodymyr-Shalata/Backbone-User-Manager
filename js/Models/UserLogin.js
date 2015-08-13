define([
    'backbone'
], function(Backbone){

    var UserLogin = Backbone.Model.extend({
        urlRoot: './backend/login.php'
    });

    return UserLogin;

});