function evaluateEmployees(employees) {

  // Step 1: Filter employees with more than 5 tasks
  const filtered = employees.filter(e => e.tasksCompleted > 5);

  // Step 2: Map to name + performance
  const mapped = filtered.map(e => {

    let performance = "";

    if (e.rating > 4.5) {
      performance = "Excellent";
    } else if (e.rating >= 3) {
      performance = "Good";
    } else {
      performance = "Needs Improvement";
    }

    return { name: e.name, performance };
  });

  // Step 3: Sort performance levels
  const priority = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };

  mapped.sort((a, b) => priority[b.performance] - priority[a.performance]);

  return mapped;
}
const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluateEmployees(employees));

