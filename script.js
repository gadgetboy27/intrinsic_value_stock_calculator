function calculateIntrinsicValue() {
    // Get input values
    const stockName = document.getElementById('stockName').value;
    const ticker = document.getElementById('ticker').value;
    const fcf = parseFloat(document.getElementById('fcf').value);
    const growthRate = parseFloat(document.getElementById('growthRate').value) / 100;
    const discountRate = parseFloat(document.getElementById('discountRate').value) / 100;
    const terminalValue = parseFloat(document.getElementById('terminalValue').value);

    // Calculate intrinsic value using the DCF formula
    let intrinsicValue = 0;
    const periods = 5;

    for (let t = 1; t <= periods; t++) {
        intrinsicValue += fcf / Math.pow(1 + discountRate, t);
        fcf *= (1 + growthRate);
    }

    intrinsicValue += terminalValue / Math.pow(1 + discountRate, periods);

    // Calculate 15% discounted intrinsic value
    const discountedIntrinsicValue = intrinsicValue * 0.85;

    // Display results
    const resultsList = document.getElementById('resultsList');
    const listItem = document.createElement('li');
    listItem.textContent = `Stock: ${stockName} (${ticker}), Intrinsic Value: $${intrinsicValue.toFixed(2)}, 15% Discounted Value: $${discountedIntrinsicValue.toFixed(2)}`;
    resultsList.appendChild(listItem);

    // Clear the form
    document.getElementById('stockForm').reset();
}
