Function.prototype.addMethod = function(name , fn){
    this.prototype[name] = fn;
}

var Methods =  function(){};
Methods.addMethod('checkName' , function(){
    console.log('Check Name!');
})

console.log('CheckObject10');
var m = new Methods();
m.checkName();
