// // class
// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, specias: string, sound: string) {
//         this.name = name,
//             this.species = specias,
//             this.sound = sound
//     }
//     // function
//     makeSound() {
//         console.log(`${this.name} is making sound: ${this.sound}`);
//     }
// }
// // object
// const dog = new Animal("doggy", "dog", "gew gew gew")
// // console.log({ dog });
// dog.makeSound();

// 2nd Method useing peramiter properties
class Animal {
    constructor(public name: string, public species: string, public sound: string) {

    }
    makeSound() {
        console.log(`${this.name} is making sound: ${this.sound}`);
    }
}
// object
const cat = new Animal("caty", "cat", "mew mew mew")
cat.makeSound();

/// perametar use korle codebase easy hoi 