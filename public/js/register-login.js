const registerFormHandler = async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email-register').value;
    const password = document.getElementById('password-register').value;
    const emailArr = email.split('@');
    const name = emailArr[0];
    console.log(email)
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
        
    if (response.ok) {
        console.log("registerd")
        document.location.replace('/')
    } else {
        alert('Failed to register');
    };
};

const registerLogin =  async (email, password)  => {
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log in');
    }
};


document.getElementById('register-form').addEventListener('click', registerFormHandler);