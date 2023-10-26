
$(document).ready(function() {
  
    var correctAnswer1 = "between 1 and 10 billion";
    var correctAnswer2 = "user experience";
    var correctAnswer3 = "hyper text markup language";
    var correctAnswer4 = "absolute path";

  
    $("input[name='answer1']").change(function() {
        var selectedAnswer = $(this).val();
        $("input[name='answer1']").attr('disabled', true);

        if (selectedAnswer === correctAnswer1) {
            $("#result1").text("Correct! Between 1 and 10 Billion.");
            $("#result1").css("color", "green");
        } else {
            $("#result1").text("Incorrect. The correct answer is Between 1 and 10 Billion.");
            $("#result1").css("color", "red");
        }
    });

 
    $("input[name='answer2']").change(function() {
        var selectedAnswer = $(this).val();
        $("input[name='answer2']").attr('disabled', true);

        if (selectedAnswer === correctAnswer2) {
            $("#result2").text("Correct! User Experience.");
            $("#result2").css("color", "green");
        } else {
            $("#result2").text("Incorrect. The correct answer is User Experience.");
            $("#result2").css("color", "red");
        }
    });

    $("input[name='answer3']").change(function() {
        var selectedAnswer = $(this).val();
        $("input[name='answer3']").attr('disabled', true);

        if (selectedAnswer === correctAnswer3) {
            $("#result3").text("Correct! Hyper Text Markup Language.");
            $("#result3").css("color", "green");
        } else {
            $("#result3").text("Incorrect. The correct answer is Hyper Text Markup Language.");
            $("#result3").css("color", "red");
        }
    });

    $("input[name='answer4']").change(function() {
        var selectedAnswer = $(this).val();
        $("input[name='answer4']").attr('disabled', true);

        if (selectedAnswer === correctAnswer4) {
            $("#result4").text("Correct! Absolute path.");
            $("#result4").css("color", "green");
        } else {
            $("#result4").text("Incorrect. The correct answer is Absolute path.");
            $("#result4").css("color", "red");
        }
    });

});
