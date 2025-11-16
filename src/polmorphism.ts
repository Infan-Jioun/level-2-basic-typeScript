class Person {
    getSleep() {
        console.log(`I am a Normal Happy Person I sleep for 8 hours`);
    }
}
class Student extends Person {
    getSleep() {
        console.log(`I am a student. I sleep 7 Hours`);
    }
}
class NextLevelWebDeveloper extends Person {
    getSleep() {
        console.log(`I am Next level web developer .I Sleep for 8 Hours`);
    }
}
const getSleepingHours = (param: Person) => {
    param.getSleep();
}
const person1 = new Person()
const person2 = new Student()
const person3 = new NextLevelWebDeveloper()

console.log(getSleepingHours(person3));