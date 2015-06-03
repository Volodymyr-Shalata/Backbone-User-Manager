<?php
class Session{
    public function __construct(){
        session_start();
    }

    public function set($key, $val){
        $_SESSION[$key] = $val;
    }

    public function get($param){
        if(isset($_SESSION[$param]) && $_SESSION[$param]){
            return $_SESSION[$param];
        }else{
            return "There is no such user";
        }
    }

    public function delete($param){
        if(isset($_SESSION[$param])&& $_SESSION[$param]){
            unset($_SESSION[$param]);
            return "Delete";
        }else{
            return "No user";
        }
    }

    public function destroy(){
        session_destroy();
    }
}

?>