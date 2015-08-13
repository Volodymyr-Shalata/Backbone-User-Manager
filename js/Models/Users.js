define([
    'backbone'
], function(Backbone){

    var Users = Backbone.Collection.extend({
        url: './backend/users.php'
    });

    return Users;

});