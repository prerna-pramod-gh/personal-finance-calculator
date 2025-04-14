// Budget Planner
document.getElementById('budget-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    
    if (isNaN(income) || isNaN(expenses)) {
        alert('Please enter valid numbers.');
        return;
    }
    
    const balance = income - expenses;
    const resultDiv = document.getElementById('budget-result');
    
    if (balance >= 0) {
        resultDiv.innerHTML = `🎉 Surplus: $${balance.toFixed(2)}`;
        resultDiv.style.backgroundColor = '#d4edda';
        resultDiv.style.color = '#155724';
    } else {
        resultDiv.innerHTML = `⚠️ Deficit: $${Math.abs(balance).toFixed(2)}`;
        resultDiv.style.backgroundColor = '#f8d7da';
        resultDiv.style.color = '#721c24';
    }
});

// Savings Calculator
document.getElementById('savings-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert('Please enter valid numbers.');
        return;
    }
    
    const amount = principal * Math.pow(1 + rate, years);
    document.getElementById('savings-result').innerHTML = 
        `💰 After ${years} years, your savings will be $${amount.toFixed(2)}`;
    document.getElementById('savings-result').style.backgroundColor = '#d1ecf1';
    document.getElementById('savings-result').style.color = '#0c5460';
});

// Loan Calculator
document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const principal = parseFloat(document.getElementById('loan-amount').value);
    const annualRate = parseFloat(document.getElementById('loan-rate').value) / 100;
    const years = parseInt(document.getElementById('loan-years').value);
    
    if (isNaN(principal) || isNaN(annualRate) || isNaN(years)) {
        alert('Please enter valid numbers.');
        return;
    }
    
    const monthlyRate = annualRate / 12;
    const months = years * 12;
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) /
                          (Math.pow(1 + monthlyRate, months) - 1);
    
    document.getElementById('loan-result').innerHTML = 
        `📊 Your monthly payment is $${monthlyPayment.toFixed(2)} for ${years} years`;
    document.getElementById('loan-result').style.backgroundColor = '#fff3cd';
    document.getElementById('loan-result').style.color = '#856404';
});
