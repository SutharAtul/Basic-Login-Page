async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('users.json');
        const users = await response.json();

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            document.getElementById('message').innerText = 'Login successful!';
            document.getElementById('message').style.color = 'green';
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1000);
        } else {
            document.getElementById('message').innerText = 'Invalid username or password';
            document.getElementById('message').style.color = 'red';
        }
    } catch (error) {
        console.error('Error loading users.json', error);
    }
}
