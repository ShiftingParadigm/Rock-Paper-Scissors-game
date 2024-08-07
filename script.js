let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

let userScorepara = document.querySelector("#user")
let compScorepara = document.querySelector("#comp")

const playGame = (userChoice) => {
        console.log("user choice =",userChoice);
        // Computer choice
       const compChoice = getCompchoice();
        console.log("computer choice =", compChoice);


        if (userChoice === compChoice) {
            console.log("Game was draw");
            msg.innerText = "Game was drawn!"
            msg.style.backgroundColor = "#999999"
        }

        else{
                let userWin = true;

                if (userChoice === "rock") {
                    userWin = compChoice === "paper" ? false : true;
                }
                else if (userChoice === "paper") {
                    userWin = compChoice === "rock" ? true : false;
                }
                else{
                    userWin = compChoice === "rock" ? false : true;
                }

                showWinner(userWin,userChoice,compChoice);
        }

        
}


const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win")
        msg.innerText = `You Win.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#6FC954"
    }
    else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("Computer wins")
        msg.innerText = `Computer Wins. ${compChoice} beats ${userChoice}`  ;
        msg.style.backgroundColor = "#B70000"
    }
}

const getCompchoice = () => {
        let choicearr = ["rock","paper","scissors"]
        let randIndx = Math.floor(Math.random()*3)
        return choicearr[randIndx]
}



choices.forEach((choice) =>{
    
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id")

        playGame(userChoice);

    })
})
