const expenseForm = document.getElementById("expenseForm");

expenseForm.addEventListener("submit", function(event){

    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    const expense = {id:Date.now, amount:Number(amount), category, description};

    const expenses = JSON.parse(localStorage.getItem("expenses"))||[];

    expenses.push(expense);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    alert("Expenses Saved");

    window.location.href="dashboard.html";

});