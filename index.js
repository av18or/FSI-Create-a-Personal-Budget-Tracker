let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

let answer = window.prompt(weeklyExpenseQuestions[0]);
console.log(typeof answer)

for(let i = 0; i < weeklyExpenseQuestions.length; i++) {
    let answer = window.prompt(weeklyExpenseQuestions[i]);
    weeklyExpenses = weeklyExpenses + parseInt(answer);
}

for(let i = 0; i < monthlyExpenseQuestions.length; i++) {
    let answer = window.prompt(monthlyExpenseQuestions[i]);
    monthlyExpenses = monthlyExpenses + parseInt(answer);
}

for(let i = 0; i < annualExpenseQuestions.length; i++) {
    let answer = window.prompt(annualExpenseQuestions[i]);
    annualExpenses = annualExpenses + parseInt(answer);
}