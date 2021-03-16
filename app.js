console.log("Hell0");
var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_div = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerChoice(){
      var t = Math.floor(Math.random() * 3);
      var choices = ['r', 'p', 's'];
      return (choices[t]);
}

function convert(letter){
      if(letter === 'r')
          return "ROCK";
      else if (letter === 's')
          return "SCISSORS";
          return "PAPER";
}


function win(user, computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  const userWord = "user".fontsize(3);
  const compWord = "comp".fontsize(3);
  result_div.innerHTML = convert(user) +userWord+ " BEATS " + convert(computer)+compWord + " .YOU WIN";
}

function lose(user, computer){
  compScore++;
  compScore_span.innerHTML = compScore;
  const userWord = "user".fontsize(3);
  const compWord = "comp".fontsize(3);
  result_div.innerHTML = convert(computer) +compWord+ " BEATS " + convert(user)+userWord + " .YOU Lose";
}

function draw(user, computer){
  const userWord = "user".fontsize(3);
  const compWord = "comp".fontsize(3);
  result_div.innerHTML = convert(computer) +compWord+ " Do Not BEATS " + convert(user)+userWord + " .Its a Draw.";
}

function game(userChoice){
    var computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
          case "rs":
          case "pr":
          case "sp":win(userChoice, computerChoice);
            break;
          case "rp":
          case "ps":
          case "sr":lose(userChoice, computerChoice);
            break;
          case "rr":
          case "pp":
          case "ss":draw(userChoice, computerChoice);
    }
}

function main(){
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");
  })
  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();
