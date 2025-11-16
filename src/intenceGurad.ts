class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
    getSleep(numbersOfHourse: string) {
        console.log(`${this.name} doinik ${numbersOfHourse} ghonta study kore`);
    }
}
class Student extends Person {
    constructor(name: string) {
        super(name)
    }
    doStudy(numbersOfHourse: number) {
        console.log(`${this.name} doinik ${numbersOfHourse} ghonta study kore `);
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name)
    }
    takeClass(numbarsOfHours: number) {
        console.log(`${this.name} doink ${numbarsOfHours} gonta class ne`);
    }
}

// Function Guard ;
const isStudent = (user: Person) => {
    return user instanceof Student;
}
const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}
const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10)
    } else if (isTeacher(user)) {
        user.takeClass(5)
    }
}
const student1 = new Student("infan")
const teacher1 = new Teacher("Jioun")

getUserInfo(student1)
getUserInfo(teacher1)