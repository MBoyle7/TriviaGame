function submitAnswers() {
    var total = 4;
    var score = 0;

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;

    if(q1 == null || q1 == '') {
        alert('You missed question 1');
         
    };
    
    if(q2 == null || q2 == '') {
        alert('You missed question 2');
         
    };

    if(q3 == null || q3 == '') {
        alert('You missed question 3');
        
    };

    if(q4 == null || q4 == '') {
        alert('You missed question 4');
         
    };

    var answers = ["b","c","a","d"];

    for(i = 1, i <= total, i++) {
        if(eval('q'+i) == answers[i-1]) {
            score++
        }
    };

    
}    




    


