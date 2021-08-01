const renderLoginForm = async () => {
   
    
    const response = await fetch('api/users/loginform', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    
    if (response.ok) {
        document.location.replace('/login');
    }  
}



document.getElementById('login-start').addEventListener('click', renderLoginForm);