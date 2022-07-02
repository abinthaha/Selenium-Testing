var username = document.getElementById('username');
var password = document.getElementById('password');

$('#submit-btn').on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (username.value.trim().length === 0) {
        // alert('Username cannot be empty');
    } else if (password.value.trim().length === 0) {
        // alert('Password cannot be empty');
    } else if (username.value === 'test@test.com' && password.value === 'password') {
        // alert('Login Success')
    } else {
        // alert('Login credentials are incorrect, please use correct details')
    }
})