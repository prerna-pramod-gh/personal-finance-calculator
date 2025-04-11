document.getElementById("calcBtn").addEventListener("click", calculateBudget);

function calculateBudget() {
  const income = parseFloat(document.getElementById('income').value);
  const expenses = parseFloat(document.getElementById('expenses').value);

  const resultEl = document.getElementById('result');

  if (isNaN(income) || isNaN(expenses)) {
    resultEl.innerText = "Please enter valid numbers for income and expenses.";
    return;
  }

  const balance = income - expenses;
  resultEl.innerText = `Your remaining balance is $${balance.toFixed(2)}`;
}
