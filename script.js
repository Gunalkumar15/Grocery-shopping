document.getElementById('login-page').style.display = 'block';

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('shopping-page').style.display = 'block';
    } else {
        alert('Please enter a valid username and password.');
    }
}

function selectItem(button, item) {
    const li = button.parentNode;
    li.style.backgroundColor = '#d3ffd3';
    li.querySelector('button').disabled = true;
    li.querySelector('button').innerText = 'Selected';
    li.setAttribute('data-selected', item);
}

function proceedToAddress() {
    const selectedItems = Array.from(document.querySelectorAll('#grocery-list li[data-selected]'));
    
    if (selectedItems.length > 0) {
        document.getElementById('shopping-page').style.display = 'none';
        document.getElementById('address-page').style.display = 'block';
    } else {
        alert('Please select at least one item.');
    }
}

function proceedToPayment() {
    const address = document.getElementById('address').value.trim();

    if (address) {
        document.getElementById('address-page').style.display = 'none';
        document.getElementById('payment-page').style.display = 'block';
    } else {
        alert('Please enter your address.');
    }
}

function placeOrder() {
    document.getElementById('payment-page').style.display = 'none';
    document.getElementById('status-page').style.display = 'block';
    document.getElementById('status-message').innerText = 'Your order has been placed successfully and will be delivered to your address.';
}
