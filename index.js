const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js')


const generateReadMe = ({ title, license, description, installation, tools, usage, contribute, github, email, reach }) => {
    return ` 
    Title: 
    ${title}

    License:
    ${license}
    
    Brief Description: 
    ${description}
    
    Step by step install instructions: 
    ${installation}
    
    Required tools and packages for use: 
    ${tools}
    
    What is the primary use of this application and its purpose: 
    ${usage}
    
    Notes of how other developers can contribute to this repo: 
    ${contribute}
    
    Personal Github link: 
    ${github}
    
    Personal Email: 
    ${email}
    
    The best way to reach me for more information is: 
    ${reach}
    `
}

inquirer.prompt([
    {
        name: "title",
        message: "What did you name this masterpiece?",
        type: "input",
    },
    {
        name: "license",
        message: "What license does your project use?",
        type: "list",
        choices: ['None', 'Apache 2.0', 'MIT', "GPL v3.0"]
    },
    {
        name: "description",
        message: "So, what is this?",
        type: "input",
    },

    {
        name: "install",
        message: "How do I install this nifty app?",
        type: "input",
    },

    {
        name: "tools",
        message: "What is the step by step process to install the needed tools for this creation?",
        type: "input",
    },

    {
        name: "usage",
        message: "What is the practical use of this application?",
        type: "input",
    },

    {
        name: "contribute",
        message: "What should others do to ensure their contributions are appropriately added?",
        type: "input",

    },
    {
        name: "gitHub",
        message: "What is the link for your gitHub account?",
        type: "input",
    },
    {
        message: "What is the best email to reach you at for buisness matters?",
        name: "email",
        type: "input",
    },
    {
        name: "reach",
        message: "Best way to reach you?",
        type: "input",
    },
])
    .then((answer) => {
        const newFile = generateReadMe(answer)

        fs.writeFile('awesomeReadMe.md', newFile, function (err) {
            if (err) throw err;
            console.log('saved');

        });
    })









