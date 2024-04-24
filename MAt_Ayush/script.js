document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('loginMessage');

    if (username === 'admin' && password === 'admin') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Invalid username or password';
        message.style.color = 'red';
    }
});

