define([
    'backbone'
], function(Backbone){

    var Registration = Backbone.Model.extend({
        urlRoot: './backend/registration.php'
    });

    return Registration;

});