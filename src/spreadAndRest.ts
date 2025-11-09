
// Spread use for array
const friend = ["infan", "jioun", "rahman"];
const schoolFriend = ["rahim", "karim", "sarim"];
const collegeFriend = ["lorim", "torim", "aorim", "harim"]
const universityFriend = ["shawn", "maown", "oman"]


// console.log("friend", friend.push(...schoolFriend));
// console.log(friend.push(...collegeFriend));
// console.log(friend.push(...universityFriend));
// console.log(friend);

// Spread use for Object

const user = { name: "infan", phone: "01610240096", email: "infanjiounrahman20606@gmail.com" }
const otherInfo = { address: "panchlish, Chattogram", DOB: "December" }
const userInfo = { ...user, ...otherInfo }
console.log(userInfo); // data golo eksongge kore rakbe