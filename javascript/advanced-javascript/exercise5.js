// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  let usernameArray = [];
  array.forEach((obj) => {
    usernameArray.push(obj.username + "!");
  })
  console.log("//Create an array using forEach that has all the usernames with a \"!\" to each of the usernames")
  console.log(usernameArray);
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  const nameArrayQuestion = array.map(obj => {
    return obj.username + "?";
  })
  console.log("//Create an array using map that has all the usernames with a \? to each of the usernames")
  console.log(nameArrayQuestion);

  //Filter the array to only include users who are on team: red
 let arrayTeamRed = array.filter(obj => {
    return obj.team === "red";
  })
  arrayTeamRed = arrayTeamRed.map(obj => {
    return obj.username;
  })
  console.log("//Filter the array to only include users who are on team: red");
  console.log(arrayTeamRed);
  
  //Find out the total score of all users using reduce
  const totalScore = array.reduce((acc, obj) => {
    return acc + obj.score 
  }, 0);
  console.log(totalScore);
  
  //(1), what is the value of i? -The current index that .map is being run on

  //(2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      return num * 2;
  })
  console.log(newArray);
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  