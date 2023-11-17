document.getElementById('convertBtn').addEventListener('click', () => {
    
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

// const getExchangeRate = async () => {
//     try {
//         const response = await fetch("https://open.er-api.com/v6/latest/USD");
//         const data = await response.json();
//         return data.USD.rate_float;
//     } catch (error) {
//         console.error("Error fetching exchange rates:", error);
//         throw error;
//     }
// };

    const exchangeRates = {
        'USD': 1.0,
        'EUR': 0.85,
        'GBP': 0.73,
        'NGN': 824.0, // Replace with the actual NGN to USD rate
    };

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    if (fromRate && toRate) {
        const convertedAmount = (amount / fromRate) * toRate;
        const resultElement = document.getElementById('result');
        resultElement.textContent = `${amount.toFixed(2)} ${fromCurrency} is Equal to ${convertedAmount.toFixed(2)} ${toCurrency}.`;
    } else {
        alert('Invalid currency selection.');
    }
})
