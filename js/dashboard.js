const user = JSON.parse(localStorage.getItem("user"));

const loggedIn = localStorage.getItem("loggedIn");

if(!loggedIn){
    window.location.href="login.html";
}

document.getElementById("userName").textContent = "Welcome " +  user.name;

let expenses = JSON.parse(localStorage.getItem("expenses"))||[];

const expenseList = document.getElementById("expenseList");

const totalElement = document.getElementById("total");

function renderExpenses(){

    expenseList.innerHTML="";

    let total=0;

    expenses.forEach(
        function(expense, index){
            total+=expense.amount;


            const item = document.createElement("div");

            item.className = "expense";

            item.innerHTML = ``
        }
    )
}

expenses.forEach(function(expense){
    const item = document.createElement("div");
    item.innerHTML = `<p>
            R${expense.amount} - ${expense.category} - ${expense.description}
            </p>`;

    list.appendChild(item);

});

document.getElementById("logout").addEventListener("click", function(){
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
});