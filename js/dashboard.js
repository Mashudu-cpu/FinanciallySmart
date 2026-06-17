const user =
JSON.parse(
localStorage.getItem(
"user"
)
);



const loggedIn =
localStorage.getItem(
"loggedIn"
);



if(
!loggedIn
){

window.location.href =
"./login.html";

}



document
.getElementById(
"userName"
)

.textContent =

"Welcome " +
user.name;



let expenses =

JSON.parse(
localStorage.getItem(
"expenses"
)
)

|| [];



const expenseList =

document
.getElementById(
"expenseList"
);



const totalElement =

document
.getElementById(
"total"
);




function renderExpenses(){


expenseList.innerHTML="";



let total=0;



expenses.forEach(

function(expense,index){


total+=expense.amount;



const item=

document.createElement(
"div"
);



item.className=

"expense";



item.innerHTML=

`

<div>

<h3>

R${expense.amount}

</h3>

<p>

${expense.category}

</p>

<small>

${expense.description}

</small>

</div>



<button
class="delete"

onclick=
"deleteExpense(${index})">

Delete

</button>

`;


expenseList
.appendChild(
item
);

}



);



totalElement.textContent=

"R"+total;

}



function deleteExpense(index){


expenses.splice(
index,
1
);



localStorage.setItem(

"expenses",

JSON.stringify(
expenses
)

);



renderExpenses();

}



renderExpenses();




document
.getElementById(
"logout"
)

.addEventListener(

"click",

function(){


localStorage.removeItem(
"loggedIn"
);



window.location.href=
"./login.html";

}

);