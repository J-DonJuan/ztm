const database = [
    {
        username: "John",
        password: "secret"
    }
];

const newsFeed = [
    {
        username: "Jimmy",
        timeline: "I'm going to be a developer"
    },
    {
        username: "Sally",
        timeline: "Learning JavaScript, it's so toast"
    }
]

let userName = prompt("What's your username?");
let password = prompt("What's your password?");

function signIn(user, pass) {
    if (userName === database[0].username && password === database[0].password){
        alert("Credentials match, congrats you win $5,000 dollars!");
    } else {
        alert("Sorry, incorrect!");
    }
}

signIn(userName, password);