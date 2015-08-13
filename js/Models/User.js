define([
    'backbone'
], function(Backbone){

    var User = Backbone.Model.extend({
        urlRoot: './backend/users.php'
    });

    return User;

});