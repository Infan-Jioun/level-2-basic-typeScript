// class
class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, specias: string, sound: string) {
        this.name = name,
            this.species = specias,
            this.sound = sound
    }
    // function
    makeSound() {
        console.log(`${this.name} is making sound: ${this.sound}`);
    }
}
// object
const dog = new Animal("doggy", "dog", "gew gew gew")
// console.log({ dog });
dog.makeSound();

