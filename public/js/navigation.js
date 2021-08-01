const goToPantry = async () => {
    const response = await fetch('api/products/pantry', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        document.location.replace('./pantry')
    }
};


document.getElementById('pantry').addEventListener('click', goToPantry);
