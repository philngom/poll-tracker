// import functions and grab DOM elements
const form = document.querySelector('.form');
const currentDisplayQuestion = document.querySelector('.current-poll-question');
const currentOption1 = document.querySelector('.opt-1-words');
const currentOption2 = document.querySelector('.opt-2-words');
const currentScore1 = document.querySelector('.score1');
const currentScore2 = document.querySelector('.score2');
const currentOptionAdd1 = document.querySelector('.option-1-add');
const currentOptionSubtract1 = document.querySelector('.option-1-subtract');
const currentOptionAdd2 = document.querySelector('.option-2-add');
const currentOptionSubtract2 = document.querySelector('.option-2-subtract');
const endPoll = document.querySelector('.end-poll-button');
const pastPollsDisplay = document.querySelector('.past-polls');

// let state
const pastPolls = [];

let currentPollState = {
    questionDisplay: '',
    option1: '',
    option2: '',
    score1: 0,
    score2: 0
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const myForm = new FormData(form);

    currentPollState.questionDisplay = myForm.get('question');
    currentPollState.option1 = myForm.get('option-1-input');
    currentPollState.option2 = myForm.get('option-2-input');

    form.reset();

    displayCurrentPollEl();
});

currentOptionAdd1.addEventListener('click', () => {
    currentPollState.score1++;
    displayCurrentPollEl();
});
currentOptionSubtract1.addEventListener('click', () => {
    currentPollState.score1--;
    displayCurrentPollEl();
});
currentOptionAdd2.addEventListener('click', () => {
    currentPollState.score2++;
    displayCurrentPollEl();
});
currentOptionSubtract2.addEventListener('click', () => {
    currentPollState.score2--;
    displayCurrentPollEl();
});

function displayCurrentPollEl() {
    currentDisplayQuestion.textContent = currentPollState.questionDisplay;
    currentOption1.textContent = currentPollState.option1;
    currentOption2.textContent = currentPollState.option2;
    currentScore1.textContent = currentPollState.score1;
    currentScore2.textContent = currentPollState.score2;
}

endPoll.addEventListener('click', () => {
    pastPollsDisplay.textContent = '';
    pastPolls.push({ ...currentPollState });
    resetState();
    displayCurrentPollEl();
    displayAllPolls();
});

function resetState() {
    currentPollState = {
        questionDisplay: '',
        option1: '',
        option2: '',
        score1: 0,
        score2: 0
    };
}

function displayAllPolls() {
    for (let poll of pastPolls) {
        let pollToPost = renderPastPoll(poll);
        pastPollsDisplay.append(pollToPost);
    }
}

function renderPastPoll(poll) {
    const div = document.createElement('div');
    div.classList.add('past-poll');
    const q = document.createElement('p');
    q.textContent = `Question: ${poll.questionDisplay}`;
    const op1 = document.createElement('p');
    op1.textContent = `Option1: ${poll.option1}-->${poll.score1}`;
    const op2 = document.createElement('p');
    op2.textContent = `Option2: ${poll.option2}-->${poll.score2}`;
    div.append(q, op1, op2);
    return div;
}
// set event listeners
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
