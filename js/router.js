/**
 * Created by Володимир on 07.08.2015.
 */

define([
    'backbone',
    'Views/EditUser',
    'Views/HomePage',
    'Views/LoginView',
    'Views/Logout',
    'MenuView',
    'Views/SignUp',
    'Views/SubscrEmail',
    'Views/UserList',
    'Models/SessionModel'

], function(Backbone, EditUserView, HomePageView, LoginView, LogoutView, MenuView, SignUpView, SubscrEmailView, UserListView, SessionModel){

    var Router = Backbone.Router.extend({
        routes:{
            //'' - means home directory
            'home': 'home',
            'userManager': 'userManager',
            'new': 'editUser',
            'edit/:id': 'editUser',
            'login' : 'login',
            'logout': 'logout',
            'signup': 'signup'
        }
    });


    var initialize = function(){

        var router = new Router();
        var menuView = new MenuView();
        var subscrEmail = new SubscrEmailView();
        var session = new SessionModel();

        var userList = new UserListView();
        var editUser = new EditUserView();
        var homePage = new HomePageView();
        var login = new LoginView();
        var logOut = new LogoutView();
        var signUp = new SignUpView();

        //Session variables
        var logIn = session.get('is_logged');
        var role = session.get('user_role');

        if(!logIn && !role){
            router.navigate('login', {trigger:true});
        }

        //Always render email and Menu View
        subscrEmail.render();
        menuView.render();

        router.on('route:userManager',function(){
            //when we go to the home directory, backbone router see that its calles home
            //and bind it with this event, in witch we launch render function to the userlist object
            //that defined in userLIst object, and insert data into the template
            userList.render();
        });
        router.on('route:editUser',function(id){
            editUser.render({id: id});
        });
        router.on('route:home', function(){
            homePage.render();
        });
        router.on('route:login', function(){
            login.render();
        });
        router.on('route:logout', function(){
            logOut.render();
        });
        router.on('route:signup', function(){
            signUp.render();
        });
        Backbone.history.start();

    };

    return {
        initialize: initialize
    }
});