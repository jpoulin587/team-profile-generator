const inquirer = require("inquirer");
const Employee = require("./lib/Employee").default;
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");


function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'nameSelect',
                message: 'What is the new employee\'s name?',
            },
            {
                type: 'list',
                name: 'roleSelect',
                message: 'What is the employees title?',
                choices: ['Manager', 'Engineer', 'Intern',],
            },
            {
                type: 'input',
                name: 'idSelect',
                message: 'What is the new employee\'s ID number?',
            },
            {
                type: 'input',
                name: 'emailSelect',
                message: 'What is the new employee\'s email address?',
            },
        ])
        .then ((data) => {
            let roleData = ""
            switch (data.roleSelect) {
                case 'Manager':
                    roleData = 'office number'
                    console.log(roleData);
                    break;

                    case 'Engineer':
                    roleData = 'Github Repo'
                    console.log(roleData);
                    break;

                    case 'Intern':
                    roleData = 'school'
                    console.log(roleData);
                    break;
            
                default:
                    break;
            }
        });
        




}; //end of the addEmployee function



















function writeHtml() {
//TODO html template here

;}


addEmployee();