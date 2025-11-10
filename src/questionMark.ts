// ? : : tarnary opearator : decision making
// ?? : nullish caolescing operator null / undifined
// ?. : optional cahing

const biyarAgeCount = (userAge: number) => {
    // if (userAge >= 21) {
    //     console.log("tomar biyar age hoie gese ");
    // }
    //  else {
    //     console.log("tomar biyar boiosh hoi nai");
    //  }

}
console.log(biyarAgeCount(20));
// ?? etar kaj hosse null or undifined check kore 
const webTheme = "dark";
const selectTheme = webTheme ?? "white"
console.log(selectTheme);
// Ternary Operator হলো if...else লেখার একটা short form।
// এটা দিয়ে এক লাইনে conditional logic লেখা যায়।
// syntex  //  condition ? valueIfTrue : valueIfFalse

const isAuthenticated = null;
const reaultWithTernary = isAuthenticated ? isAuthenticated : "you are guest"
//console.log(reaultWithTernary);

const resultWithNulish = isAuthenticated ?? "you are guest"
//console.log(resultWithNulish);
console.log({ reaultWithTernary }, { resultWithNulish });

const user: {
    name: string;
    address: {
        city: string
        postalCode? : string 
    }
} = {
    name: "infan",
    address: {
        city: "Chattogram"
    }
}
console.log(user?.address?.postalCode);