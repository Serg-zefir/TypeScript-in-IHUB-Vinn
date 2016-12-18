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
    return "Hello, " + member.FirstName + " " + member.lastName;
}
// var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter({ FirstName: 'Serg', lastName: 'Takij' });
