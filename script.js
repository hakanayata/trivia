// TODO: Add code to check answers to questions
document.addEventListener('DOMContentLoaded', function () {

    // multiple choice
    let mult_choice_btns = document.querySelectorAll('.mult');
    let result1 = document.querySelector('.result1')
    let result2 = document.querySelector('.result2')


    mult_choice_btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {

            removeStyle(index)

            if (btn.classList.contains('correct')) {
                btn.style.backgroundColor = 'green';
                result1.textContent = 'Correct ✅';
            } else {
                btn.style.backgroundColor = 'red';
                result1.textContent = 'Incorrect ❌';
            }
        })
    })


    function removeStyle(index) {

        for (let i = 0; i < mult_choice_btns.length; i++) {
            if (i != index) {
                mult_choice_btns[i].style.backgroundColor = '#D9EDFF';
            }
        }
    }


    // free response
    let check_btn = document.querySelector('.check_btn');

    check_btn.addEventListener('click', function () {
        let free_res = document.querySelector('.free_res');
        if (free_res.value.toUpperCase() === 'CS50') {
            check_btn.style.backgroundColor = 'green';
            result2.textContent = 'Correct ✅';
        }
        else {
            check_btn.style.backgroundColor = 'red';
            result2.textContent = 'Incorrect ❌';
        }
    });

});


// BEFORE REFACTOR
// let correct_ans = document.querySelector('.correct');
// let wrong_answers = document.querySelectorAll('.wrong');

// correct_ans.addEventListener('click', function () {
//     correct_ans.style.backgroundColor = 'green';
//     wrong_answers.forEach((ans) => ans.style.backgroundColor = '#D9EDFF')
//     document.querySelector('.result1').innerHTML = 'Correct ✅';

// });

// for (let i = 0; i < wrong_answers.length; i++) {
//     wrong_answers[i].addEventListener('click', function () {
//         wrong_answers[i].style.backgroundColor = 'red';
//         document.querySelector('.result1').innerHTML = 'Incorrect ❌';
//     });
// }