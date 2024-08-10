// You ask your assistant (a function) to remember a task (variable) while you attend a meeting. After the meeting, your assistant still remembers the task because they’ve "closed over" the environment in which you gave the instruction.


function personalAssistant(task) {
    return function reminder() {
        console.log(`Don't forget to ${task}!`);
    };
}

const remindMe = personalAssistant("submit the report");
// You go to a meeting, and later...

remindMe(); // Output: Don't forget to submit the report!