class Parent {
    name: string;
    age: number;
    address: string;


    constructor(name: string, age: number, address: string, designation: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    methodStudent(sleepHour: number) {
        console.log(`${this.name} ${sleepHour} gonta gomai  `);
    }
}

class Student extends Parent { }
class Teacher extends Parent {
    designation: string // property
    constructor(name: string, age: number, address: string, designation: string) {

        super(name, age, address, designation)
        this.designation = designation
    }
    takeClass(numberOfClass: number) {
        console.log(`${this.name} class ne ${numberOfClass} ta`);
    }
}
const student1 = new Student("infan", 22, "bangladesh", "Student");
const Teacher1 = new Teacher("Jioun Sir", 30, "Bangladesh", "Teacher")
// console.log(student1);
Teacher1.takeClass(7)
