// Packages required 
const inquirer = require('inquirer');
const fs = require('fs').promises;

// Constant with parameters to input information from the user answers into the template literal
const generateMarkdown = ({license, title, description, installation, usage, contribution, test, github, email}) =>

// Template literal for the README.md file 
`
${licenseBadge(license)}

# ${title}

## Description
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Test](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${license}license. 

## Credits
This project was possible thanks to the help and contribution of ${contribution}

## Tests
${test}

## Questions
If you would like more information about this application contact me at: ${email}. 
For other projects I've developed refer to my GitHub: ${github}
`;


// License functions
// Function to show the badge at the top of the README
function licenseBadge(license){
    if (license){
        return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
    } 
};

// Welcome message for user
console.log('Welcome to the Professional README Generator')

// Questions for user input
inquirer.prompt([
    {
        type: 'input',
        prefix: 1,
        name: 'title',
        message: 'Provide the title of your project:'
    },
    {
        type: 'input',
        prefix: 2,
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project:'
    },
    {
        type: 'input',
        prefix: 3,
        name: 'installation',
        message: 'Provide the steps required to install your project:'
    },
    {
        type: 'input',
        prefix: 4,
        name: 'usage',
        message: 'Provide instructions and examples for use of your project:'
    },
    {
        type: 'input',
        prefix: 5,
        name: 'contribution',
        message: 'List your collaborators:'
    },
    {
        type: 'input',
        prefix: 6,
        name: 'test',
        message: 'Enter test instructions for your project:'
    },
    {
        type: 'list',
        prefix: 7,
        name: 'license',
        message: 'Select the license for your project:',
        choices: ['Apache', 'MIT', 'GPL', 'BSD']
    },
    {
        type: 'input',
        prefix: 8,
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        prefix: 9,
        name: 'email',
        message: 'Enter your email address:'
    },
])

.then((answers) => {
    const readMeContent = generateMarkdown(answers);
    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully creadted README.md!')
    );
});