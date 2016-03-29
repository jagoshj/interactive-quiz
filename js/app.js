$(document).ready(function () {
    /*-- Define Global Variables --*/
    /*--- Questions Variable ---*/
    var questions = [
        //Question 1
        {
            questionText: 'Robert Ripley started his cartoon feature in 1918. What was the original name of his comic?',
            choices: ['Strange Stuff',
                      'Twilight Zone',
                      'Champs and Chumps',
                      'I Bet You Did Not Know'],
            answerImage: 'images/ripley-cartoon.jpg',
            correct: 2,
            correctDetails: 'The New York Globe published Ripleys first comic December 19, 1918 under the title Champs and Chumps. It dealt with sports trivia. By 1919 he had added other topics and changed the name to Believe It or Not.'
        },

        //Question 2
        {
            questionText: 'Ripley collected all kinds of unusual objects and trivia. In 1933 he opened his first museum. What venue did he use?',
            choices: ['Chicago Worlds Fair',
                      'Munich Olympics',
                      'Woodstock',
                      'Coronation of King Edward VI'],
            answerImage: 'images/worlds-fair.jpg',
            correct: 0,
            correctDetails: 'The Ripley Odditorium was one of the most popular exhibitions of the Chicago Worlds Fair. It has been estimated that that almost two million people attended the first Odditorium.'
        },

        //Question 3
        {
            questionText: 'What descriptive name is given to all Ripleys museums across the world?',
            choices: ['Ripsonians',
                      'Odditorium',
                      'Palace of Wonders',
                      'Museum of the Strange and Obscure'],
            answerImage: 'images/odditorium.jpg',
            correct: 1,
            correctDetails: 'They are called Odditoriums. The first permanent one opened in St. Augustine, Florida in 1950. By 2008 there were 35 Odditoriums located all over the world and each one is unique.'
        },

        //Question 4
        {
            questionText: 'Ripleys "Believe It or Not" is responsible for the adoption of which American Icon?',
            choices: ['The Grand Canyon',
                      'The Washington Monument',
                      'The Bald Eagle',
                      'The National Anthem'],
            answerImage: 'images/flag.jpg',
            correct: 3,
            correctDetails: 'On November 3, 1929 Ripley remarked in one of his comics "Believe it or not, America has no national anthem". Americans across the country insisted that this issue be rectified. By 1931 laws were passed and "The Star Spangled Banner" was officially named the national anthem.'
        },

        //Question 5
        {
            questionText: 'In 1949, Ripleys "Believe It or Not" aired on television for the first time, with Robert Ripley as the host. He hosted the show for only 13 episodes. Why was he replaced?',
            choices: ['He died',
                      'He became Secretary of State',
                      'The show was taken off the air',
                      'The producers replaced him with Bob Barker'],
            answerImage: 'images/ripley.jpg',
            correct: 0,
            correctDetails: 'Shortly after filming the 13th episode, Robert Ripley died of an apparent heart attack. Numerologists have placed great importance on the fact that it was the 13th episode.'
        },
        //Question 6
        {
            questionText: 'A famous cartoonist got his start when Ripley published this mans cartoon of his beagle that he claimed was "a hunting dog that eats pins, tacks and razor blades." Can you guess who this comic artist was?',
            choices: ['Gary Trudeau',
                    'Salvador Dali',
                    'Dr. Seuss',
                    'Charles Schultz'],
            answerImage: 'images/schulz.jpg',
            correct: 3,
            correctDetails: 'Charles Schultz, the creator of "Peanuts" had his first work published in Ripleys "Believe it or Not". His entry was based on his dog Sparky. This beagle became the model for Snoopy!'
        },

        //Question 7
        {
            questionText: 'Which of the following Asian countries has an Odditorium?',
            choices: ['China',
                    'Turkey',
                    'Kuwait',
                    'Thailand'],
            answerImage: 'images/asia.jpg',
            correct: 2,
            correctDetails: 'There is an Odditorium in Kuwait City, Kuwait. It is located in the Hadiqat Al Sheaab Amusement Park. Interest in the strange and unusual is a worldwide fascination.'
        },

        //Question 8
        {
            questionText: 'Robert Ripleys cartoon series was so popular that he began to recieve more mail than the president of the United States.',
            choices: ['True',
                    'False', ],
            answerImage: 'images/fan-mail.jpg',
            correct: 0,
            correctDetails: 'True. Ripleys cartoon was estimated to have over 80 million readers worlwide at its height of popularity in the 1940s!'
                },

        //Question 9
        {
            questionText: 'Robert Ripley did all his own research.',
            choices: ['True',
                    'False', ],
            answerImage: 'images/research.jpg',
            correct: 1,
            correctDetails: 'False. Ripley had three primary researchers, all of whom worked for him or his column for years. One of them worked on the column for over 50 years!'
                },

        //Question 10
        {
            questionText: 'The last segment that Robert Ripley filmed for his original television show before he died was on the origins of "Taps", the song played at the funerals of soldiers.',
            choices: ['True',
                    'False'],
            answerImage: 'images/funeral.jpg',
            correct: 0,
            correctDetails: 'True! This fact has caused quite a stir from the public and is just one more odd facet attached to Mr. Ripleys mystique.'
                },
                    ];

    /*-- Result Message Variable--*/
    var feedback = "Thank you for taking the Ripley's Believe It or Not Quiz! Here are your results:";

    /*--Variables--*/
    var qNumber = 0;
    var qTotal = questions.length;
    var correctTotal = 0;

    /*-- Hide Quiz & Results --*/
    $('.quiz').hide();
    $('#results').hide();

    /*-- Display Questions Function --*/
    function questionDisplay() {
        //displays current question
        $('#questionText').text(questions[qNumber].questionText);
        $('.quizImage').html('<img src="' + questions[qNumber].answerImage + '" id="qImage">');
        $('#qNumber').text(qNumber + 1);
        $('#choices').empty();
        var choicesTotal = questions[qNumber].choices.length;
        for (var i = 0; i < choicesTotal; i++) {
            //displays the answer choices
            $('#choices').append("<li class='options'><label style='cursor: pointer'><input type='radio' name='choices' class='inputChoice' value='" + i + "' />" + questions[qNumber].choices[i] + " </label></li>");
        }
    };
    /*--Start Quiz--*/
    $('#startQuizButton').click(function () { //display first question
        $('#results').hide();
        $('.start-section').hide();
        $('.quiz').show();
        //clear Results
        $('#result_msg').empty();
        questionDisplay();
    });
    /*--Display Quiz Questions in Succession--*/
    $('.quiz').on('click', '.options input', function () {

        var answer = $("input[class='inputChoice']:checked").val();
        var correctAnswer = questions[qNumber].correct;
        if (answer == correctAnswer) {
            //if correct answer was selected
            correctTotal++;
            //console.log(correctTotal);
        }
        $('#result_msg').append("<br><p style='font-size: 2.5rem'>Q: " + questions[qNumber].questionText + "</p><br>");
        $('#result_msg').append("<p style='font-size: 3rem; font-style: italic;'>A: " + questions[qNumber].correctDetails + "</p><br>");

        //final question answered, display results
        if ((qNumber + 1) == qTotal) {

            $('#qResults').text(correctTotal + "/" + qTotal);

            $('start-button').show();
            //hide other sections
            $('.quiz').hide();
            $('.start-section').hide();
            $('#results').show();
        } else {
            //continue to next Question
            qNumber++;
            questionDisplay();
        }
    });

    /*--- Load the start section from the results section --*/
    $('#results').on('click', '#newGame', function () {
        $('.start-section').show();
        $('.quiz').hide();
        $('#results').hide();
        //reset Variables
        qNumber = 0;
        correctTotal = 0;
    });


});
