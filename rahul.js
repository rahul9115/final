answers=[{"q_no":1},{"q_no":2},{"q_no":3}]
for(var i=0;i<answers.length;i++){
    if (answers[i].q_no==3){
        answers.splice(i);

    }
}
console.log(answers)