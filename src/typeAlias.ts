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