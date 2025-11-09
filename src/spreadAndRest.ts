
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

// const user = { name: "infan", phone: "01610240096", email: "infanjiounrahman20606@gmail.com" }
// const otherInfo = { address: "panchlish, Chattogram", DOB: "December" }
// const userInfo = { ...user, ...otherInfo }
// console.log(userInfo); // data golo eksongge kore rakbe

// Rest Opreator
const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Send Invitation ${friend}`))
}
sendInvite("infan", "jioun", "rahman")

//  ekane forEach kora hoise only se array return kore na tai  se only element golo loop  chala 