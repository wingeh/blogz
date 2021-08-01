const viewPostTemplate = async () => {
    const response = await fetch('/api/products/create', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        document.location.replace('/create')
    }
}

document.getElementById('get-post-form').addEventListener('click', viewPostTemplate);
