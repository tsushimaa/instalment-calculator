document.addEventListener('DOMContentLoaded', function() {
    const loanAmountInput = document.getElementById('loanAmount');
    const loanTermInput = document.getElementById('loanTerm');
    const interestRateInput = document.getElementById('interestRate');

    loanAmountInput.addEventListener('input', calculatePayment);
    loanTermInput.addEventListener('input', calculatePayment);
    interestRateInput.addEventListener('input', calculatePayment);

    calculatePayment();
});

function updateAmountValue(value) {
    document.getElementById('loanAmountValue').textContent = `${parseInt(value).toLocaleString()} ₽`;
}

function updateTermValue(value) {
    const years = (value / 12).toFixed(0);
    document.getElementById('loanTermValue').textContent = `${years} лет`;
}

function updateRateValue(value) {
    document.getElementById('interestRateValue').textContent = `${parseFloat(value).toFixed(1)}%`;
}

function calculatePayment() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    const totalPayment = monthlyPayment * loanTerm;
    const totalOverpayment = totalPayment - loanAmount;
    const effectiveRate = ((totalOverpayment / loanAmount) / (loanTerm / 12) * 100).toFixed(2);

    document.getElementById('monthlyPayment').textContent = monthlyPayment.toFixed(2);
    document.getElementById('totalOverpayment').textContent = totalOverpayment.toFixed(2);
    document.getElementById('effectiveRate').textContent = effectiveRate;
}
document.addEventListener('DOMContentLoaded', function() {
    const loanAmountInput = document.getElementById('loanAmount');
    const loanTermInput = document.getElementById('loanTerm');
    const interestRateInput = document.getElementById('interestRate');

    loanAmountInput.addEventListener('input', calculatePayment);
    loanTermInput.addEventListener('input', calculatePayment);
    interestRateInput.addEventListener('input', calculatePayment);

    calculatePayment();
});

function updateAmountValue(value) {
    document.getElementById('loanAmountValue').textContent = `${parseInt(value).toLocaleString()} ₽`;
}

function updateTermValue(value) {
    const years = (value / 12).toFixed(0);
    document.getElementById('loanTermValue').textContent = `${years} лет`;
}

function updateRateValue(value) {
    document.getElementById('interestRateValue').textContent = `${parseFloat(value).toFixed(1)}%`;
}

function calculatePayment() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    const totalPayment = monthlyPayment * loanTerm;
    const totalOverpayment = totalPayment - loanAmount;
    const effectiveRate = ((totalOverpayment / loanAmount) / (loanTerm / 12) * 100).toFixed(2);

    document.getElementById('monthlyPayment').textContent = monthlyPayment.toFixed(2);
    document.getElementById('totalOverpayment').textContent = totalOverpayment.toFixed(2);
    document.getElementById('effectiveRate').textContent = effectiveRate;
}
