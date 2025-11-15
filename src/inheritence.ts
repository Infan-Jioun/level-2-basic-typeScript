class Student {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name,
            this.age = age,
            this.address = address

    }
    methodStudent(sleepHour: number) {
        console.log(`${this.name} ${sleepHour} gonta gomai  `);
    }
}

const student1 = new Student("infan", 22, "bangladesh");
// console.log(student1);
student1.methodStudent(7)
