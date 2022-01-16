const formValue = document.querySelector('.login-form');


const submitValid = (event) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const { email, password } = elements;
    console.log(email.value);
    console.log(password.value);
    if (email.value === '' || password.value === '') {
        alert('всі поля обов"язкові для заповнення');
    } else { 
        const object = {
            [email.getAttribute('name')]: email.value,
              [password.getAttribute('name')]: password.value,
        };
        formValue.reset();
        console.log(object);
    }

};
 
formValue.addEventListener('submit', submitValid);