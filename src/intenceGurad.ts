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
const getUserInfo = (user: Person) => {
    if (user instanceof Student) {
        user.doStudy(10)
    } else if (user instanceof Teacher) {
        user.takeClass(5)
    }
}
const student1 = new Student("infan")
const teacher1 = new Teacher("Jioun")

getUserInfo(student1)
getUserInfo(teacher1)