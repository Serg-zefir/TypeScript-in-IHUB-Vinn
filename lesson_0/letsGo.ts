interface Person {
    dem: string;
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
    return "Hello, " + member.dem + " " + member.lastName;
}

// var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter({dem: 'Serg', lastName: 'Takij'});