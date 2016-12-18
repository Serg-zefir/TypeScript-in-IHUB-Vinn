interface Person {
    FirstName: string;
    lastName: string;
}
class Student {
    name: string;
    rating: number;
    getRating(){
        console.log('Rating '+ this.name +' is '+ this.rating);
    }
}
class Greter{
    name: string;
    sayHello() {
        console.log('Hello' + name);
    }
}
function greeter(member : Person) {
    return "Hello, " + member.FirstName + " " + member.lastName;
}

// var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter({FirstName: 'Serg', lastName: 'Takij'});