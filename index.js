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
            //console.log(data);
            let roleSpecific = ""
            switch (data.roleSelect) {
                case 'Manager':
                    roleSpecific = 'office number'
                    //console.log(roleSpecific);
                    break;

                    case 'Engineer':
                    roleSpecific = 'Github Repo'
                    //console.log(roleSpecific);
                    break;

                    case 'Intern':
                    roleSpecific = 'school'
                    //console.log(roleSpecific);
                    break;
            
                default:
                    break;
            }
            inquirer.prompt([{
                message: `Enter team member's ${roleSpecific}`,
                name: 'roleSelect'
            },
            {
                type: 'list',
                message: 'Would you like to add more team members?',
                choices: ['yes','no'],
                name: "moreMembers"
            }])
            .then((data2) => {
                //console.log(data)
                //console.log(data2);
                let dataFull = {
                    ...data,
                    ...data2,
                };
                console.log(dataFull);
                console.log(dataFull.roleSelect);
                console.log(roleSpecific);

                //const writeHtml = generateHtml(dataFull);
                
                //fs.writeFile(team-roster.html, writeHtml, (err) => err ? console.log(err) : console.log('Success!')
                //);

            });
        });
        




}; //end of the addEmployee function


const generateHtml = (dataFull) =>
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
    </head>
    <body>
        <h1> My Team</h1>
        <section id=team-list class="row justify-content-around">
    
    <!-- refer to the weather dashboard project for this code-->
    
    <h1>${dataFull.nameSelect}</h1>
    <h2>${dataFull.roleSelect}</h2>
    <p>ID: ${dataFull.IDSelect}</p>
    <p>email: ${dataFull.emailSelect}(enter email)</p>
    <p>${roleSpecific}: ${dataFull.roleSelect}</p>
    
    
        </section>        
    </body>
    </html>

`





addEmployee();