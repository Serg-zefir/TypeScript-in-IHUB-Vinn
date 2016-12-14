var Student = (function () {
    function Student() {
    }
    Student.prototype.getRating = function () {
        console.log('Rating ' + this.name + ' is ' + this.rating);
    };
    return Student;
}());
var Greter = (function () {
    function Greter() {
    }
    Greter.prototype.sayHello = function () {
        console.log('Hello' + name);
    };
    return Greter;
}());
function greeter(member) {
    return "Hello, " + member.dem + " " + member.lastName;
}
// var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter({ dem: 'Serg', lastName: 'Takij' });
