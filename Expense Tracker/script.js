document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('expense-name').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;

    const expenseList = document.getElementById('expense-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${amount}</td>
        <td>${category}</td>
    `;

    expenseList.appendChild(row);

    document.getElementById('expense-form').reset();
});
