# Understanding Project Management in NodeJS
## a. Package Managers
### What is Packet Manager?
A package manager is a tool that helps us install  ,update ,remove,and manage libraries (packages) that our project needs.
### Why do we need Package Managers in Backend Development?
In Backend Development:
- We use many external libraries (Express etc)
- Installing everything manually is difficult and time-consuming
Package managers help us to :
- Save time
- Avoid errors
- Maintain proper versions of libraries
- Share projects easily with others
### Problems Faced if Package Managers Are Not Used
If we dont use a package manager:
- We must download libraries manually 
- Version conflicts can occur
- Project setup becomes confusing
- Team members may use different library versions in a team project
- Project may not run properly on another system
## b. NPM (Node Package Manager)
### What is NPM?
Node Package Manager (NPM) is the default package manager for Node.js
It comes automatically when we install Node.js.
### Why is NPM Important for Node.js Applications?
NPM is important because:
- It installs required packages
- It manages dependencies automatically
- It keeps track of project libraries
- It helps run scripts like npm start
Without NPM, managing a Node.js project becomes very hard.
### How NPM Helps in Managing Dependencies
- NPM installs required packages inside node_modules
- It records package names and versions in package.json
- It locks exact versions in package-lock.json
### c. Backend Project Initialization
## What is the Command Used to Initialize a Backend (Node.js) Project?
The command used is:

npm init
### Explain What npm init and npm init -y Do
#### npm init
Asks questions like project name, version, description
Creates a package.json file based on answers
#### npm init -y
Skips all questions
Creates package.json with default values
## Files and Folders Created After Project Initialization
### package.json
Main configuration file of the project
Contains:
Project name
Version
Scripts
Dependencies
-->Importance:
Required to install dependencies
Helps others understand the project setup
### node_modules
Contains all installed packages
Automatically created when we run npm install
--> Importance:
Required for the project to run
Very large in size
### package-lock.json
Stores exact versions of installed packages
Ensures same dependencies on every system
-->Importance:
Prevents version mismatch
Ensures consistent builds
### Files That MUST Be Committed to GitHub
#### package.json
Tells which dependencies are needed
#### package-lock.json
Ensures exact versions for everyone
These files help others run the project correctly.
### Which files/folders should not be pushed to GitHub and why
node_modules :conatins large files and is not accepted by git , so must be ignored by the git 
