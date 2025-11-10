type User = {
    id: number;
    name: {
        fristName: string;
        lastName: string;
    };
    gender: "male" | "female";
    contactNumber: string;
    address: {
        division: {
            district: string;
        };
    };

}
const user1: User = {
    id: 1,
    name: {
        fristName: "Infan",
        lastName: "Jioun"
    },
    gender: "male",
    contactNumber: "6283476",
    address: {
        division: {
            district: "chattogram"
        }
    }

}
console.log(user1);
// TODO: Function use
type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (num1, num2) => num1 + num2
console.log(add(2,4));