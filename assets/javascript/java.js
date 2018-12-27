function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            alert("You ran out of time!");
        }
    }, 1000);
}

window.onload = function() {
    timer();
}

function submitAnswers() {
    var total = 4;
    var score = 0;

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;

    if(q1 == null || q1 == '') {
        alert('You missed question 1');
        return false;  
    };
    
    if(q2 == null || q2 == '') {
        alert('You missed question 2');
        return false;  
    };

    if(q3 == null || q3 == '') {
        alert('You missed question 3');
        return false;  
    };

    if(q4 == null || q4 == '') {
        alert('You missed question 4');
        return false;  
    };

    var answers = ["b","c","a","d"];

    if(q1 == answers[0]) {
        score++;
    };

    if(q2 == answers[1]) {
        score++;
    };

    if(q3 == answers[2]) {
        score++;
    };

    if(q4 == answers[3]) {
        score++;
    };
    
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	alert('You scored '+score+' out of ' +total);
}    




    


