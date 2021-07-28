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
            console.log(data);
            let roleSpecific = ""
            switch (data.roleSelect) {
                case 'Manager':
                    roleSpecific = 'office number'
                    console.log(roleSpecific);
                    break;

                    case 'Engineer':
                    roleSpecific = 'Github Repo'
                    console.log(roleSpecific);
                    break;

                    case 'Intern':
                    roleSpecific = 'school'
                    console.log(roleSpecific);
                    break;
            
                default:
                    break;
            }
            inquirer.prompt([{
                message: `Enter team member's ${roleSpecific}`,
                name: 'roleSpecific'
            },
            {
                type: 'list',
                message: 'Would you like to add more team members?',
                choices: ['yes','no'],
                name: "moreMembers"
            }])
            .then((data) => {
            console.log(data);
            });
        });
        




}; //end of the addEmployee function



















function writeHtml() {
//TODO html template here

;}


addEmployee();