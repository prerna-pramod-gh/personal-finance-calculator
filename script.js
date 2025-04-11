function calculateBudget() {
  const income = parseFloat(document.getElementById('income').value);
  const expenses = parseFloat(document.getElementById('expenses').value);

  if (isNaN(income) || isNaN(expenses)) {
    document.getElementById('result').innerText = "Please enter valid numbers.";
    return;
  }

  const balance = income - expenses;
  document.getElementById('result').innerText = 
    `Your balance is $${balance.toFixed(2)}`;
}
