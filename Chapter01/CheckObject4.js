var checkobject = function(){
    this.checkName =  function(){
        console.log('Check Name!');
    }

    this.checkEmail = function(){
        console.log('Check Email!');
    }

    this.checkPassword = function(){
        console.log('Check Password!');
    }
}

var a = new checkobject();
a.checkName();
a.checkEmail();
a.checkPassword();