document.getElementById('create-account-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const address = document.getElementById('account-address').value;
    const balance = document.getElementById('initial-balance').value;
    await fetch('/api/create-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, initial_balance: balance })
    });
});

document.getElementById('donation-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const address = document.getElementById('donor-address').value;
    const amount = document.getElementById('donation-amount').value;
    await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, amount })
    });
});

document.getElementById('withdraw-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const address = document.getElementById('withdraw-address').value;
    const amount = document.getElementById('withdraw-amount').value;
    await fetch('/api/withdraw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, amount })
    });
});

document.getElementById('balance-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const address = document.getElementById('balance-address').value;
    const response = await fetch(`/api/balance?address=${address}`);
    const balance = await response.json();
    document.getElementById('balance-result').innerText = `Balance: ${balance}`;
});
