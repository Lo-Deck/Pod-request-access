
const myForm = document.getElementById('myForm');
const error = document.querySelectorAll('.messError');
const messageError = document.querySelector('form span');

console.log(myForm);

myForm.addEventListener('submit', function(event){


    if(!myForm[0].validity.valid)
    {
        if(myForm[0].value === '')
        {
            messageError.innerText = 'Oops! Please add your email';
        }
        else
        {
            messageError.innerText = 'Oops! Please check your email';
        }
    }

    else
    {
        messageError.innerText = '';
    }

    event.preventDefault();

});





