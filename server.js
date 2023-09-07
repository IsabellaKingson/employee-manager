const inquirer = require("inquirer");

const prompts = {
  root: [
    {
      type: "list",
      name: "toDo",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "View All Departments",
        "Add Department",
        "Quit",
      ],
    },
  ],
  addDepartment: [
    {
      type: "input",
      name: "newDepartment",
      message: "What is the name of the department?",
    },
  ],
  addRole: [
    {
      type: "input",
      name: "newRole",
      message: "What is the name of the role?",
    },
    {
      type: "input",
      name: "roleSalary",
      message: "What is the salary of the role?",
    },
    {
      type: "list",
      name: "roleDepartment",
      message: "Which department does the role belong to?",
      choices: [],
    },
  ],
  addEmployee: [
    {
      type: "input",
      name: "employeeFirst",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "employeeLast",
      message: "What is the employee's last name?",
    },
    {
      type: "list",
      name: "employeeRole",
      message: "What is the employee's role?",
      choices: [],
    },
    {
      type: "list",
      name: "employeeManager",
      message: "Who is the employee's manager?",
      choices: [],
    },
  ],
  updateEmployee: [
    {
      type: "list",
      name: "updateEmployee",
      message: "Which employee's role do you want to update?",
      choices: [],
    },
    {
      type: "list",
      name: "updatedRole",
      message: "Which role do you want to assign to the selected employee?",
      choices: [],
    },
  ],
};
