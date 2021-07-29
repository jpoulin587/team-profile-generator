const inquirer = require("inquirer");
// const Employee = require("./lib/Employee").default;
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const Manager = require("./lib/Manager");
const fs = require("fs");
let roleSpecific;
let employeeRoster = [];


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
            roleSpecific = ""
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
                name: 'roleOption'
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
                console.log(dataFull.roleOption);
                console.log(roleSpecific);
                employeeRoster.push(dataFull);
                    console.log(employeeRoster);

                if (data2.moreMembers === "yes"){
                    addEmployee();
                };

            const writeHtml = generateHtml();
                
                fs.writeFile('team-roster.html', writeHtml, (err) => err ? console.log(err) : console.log('Success!')
                );
            });
        });
        




}; //end of the addEmployee function

function makeCards(employeeRoster) {
    let cardHtml = "";
    for (let i = 0; i < employeeRoster.length; i++) {
        let roleThing = "";
        switch (employeeRoster[i].roleSelectkey) {
            case 'Manager':
                roleThing = 'Office number: '
            break;
            case 'Intern':
                roleThing = 'School: '
            
            break; 
            case 'Engineer':
                roleThing = 'GitHub: '
            break;
        default:
            break;
        }


        cardHtml +=`
        <div>
            <h2>${employeeRoster[i].nameSelect}</h2>
            <p>${employeeRoster[i].roleSelect}</p>
            <p>ID: ${employeeRoster[i].idSelect}</p>
            <p>Email: ${employeeRoster[i].emailSelect}</p>
            <p>${roleThing}: ${employeeRoster[i].roleOption}</p>
        </div>
        `       
    }
    return cardHtml;

}

const generateHtml = () => 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>My Team</title>

<style>
    h2 {
    font-size: medium;
    background-color: blue;
    color: cornsilk;
    }

</style>   
</head>

<body>

    <header class="container-fluid bg-dark text-light mb-5 p-3">
        <div class="d-flex align-items-center">
            <h1>My Team</h1>
        </div>
        </header>
            <div class="col-12 col-md-9">
                <section id="five-day-list" class="row justify-content-around">
                <!-- the div below is replaced with the makeCards function-->   
            ${makeCards(employeeRoster)}        
                </section>

</div>
</body>

</html>
`
addEmployee();


