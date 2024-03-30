// Function to convert USD to CAD
function convertUSDToCAD() {
    const usdInput = parseFloat(document.getElementById('usdInput').value);
    if (isNaN(usdInput) || usdInput <0) {
        alert("Please enter a valid number for USD.");
        return;
    }

    const exchangeRate = 1.35;
    const cadAmount = usdInput * exchangeRate;

    document.getElementById('cadInput').value = cadAmount.toFixed(3);
}
