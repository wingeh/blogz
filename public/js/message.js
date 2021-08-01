// const sendMessage = (event) => {
//     event.preventDefault();

//     const message = document.getElementById('message').value;
//     const product_id = document.getElementById('product_id').value;
    

//     const response = await fetch('api/messages', {
//         method: 'POST',
//         body: JSON.stringify({ message, product_id }),
//         headers: { 'Content-Type': 'application/json' }
//     });
//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert('Message not sent');
//     }
// };

// const viewMessages = () => {
//     const response = await fetch('/api/messages', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//     })
// }

const renderMessageForm = async () => {
    const product_id = document.querySelector('.product_id').value;
    console.log(product_id)
    const response = await fetch (`/api/products/${product_id}`, {
        method: 'GET',
        // headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
      document.location.replace('/messageform')
    }
}

const buttons = document.querySelectorAll('.renderMessageForm');

for (const button of buttons) {
    button.addEventListener('click', renderMessageForm)
}
// document.getElementById('view-message').addEventListener('click', viewMessages);
// document.getElementById('send-message').addEventListener('submit', sendMessage);