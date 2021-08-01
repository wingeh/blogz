
const renderForm = async () => {
    
    const response = await fetch('api/users/register', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/register');
    }

};

document.getElementById('register-start').addEventListener('click', renderForm);