const postProduct = async (event) => {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const type = document.getElementById('type').value;
    const quantity = document.getElementById('quantity').value;
    const description = document.getElementById('description').value;

    const response = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify({ product, type, quantity, description }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/pantry');
    } else {
        alert('Failed to post');
    }
};

document.getElementById('post').addEventListener('click', postProduct);