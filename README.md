# Library Management System

## Table of Contents
* [Introduction](#introduction)
* [Team Members](#team-members)
* [Technologies](#technologies)
* [Files](#files)
* [Setup](#setup)

## Introduction 
As part of the NGT program, we are designing a library management system to allow users to perform simple actions such as checking out a book.

## Team Members
* [Askar Poudyal](https://github.com/askarpoudyal6)
* [Ben Hamula](https://github.com/BenjaCoder)
* [Eric Chen](https://github.com/Eric-W-Chen)
* [Orfilia Qiu](https://github.com/OTQ21)
* [Taylor Fernandez](https://github.com/tfernandez829)
* [Victor Hernandez](https://github.com/vichdz97)

## Technologies
* [Java](https://www.java.com/)
* [Spring Boot](https://spring.io/)
* [SQLite](https://sqlite.org/index.html)
* [Postman](https://www.postman.com/)
* [Node.js](https://nodejs.org/)
* [Git](https://git-scm.com)
* [Angular](https://angular.io)
* [TypeScript](https://www.typescriptlang.org)
* [Bootstrap](https://getbootstrap.com)
* [Excalidraw](https://excalidraw.com)

## Files
* Brainstorming ideas can be found in the shared [OneNote](https://capgemini-my.sharepoint.com/:o:/p/benjamin_hamula/EvFLoUNbmbZFiJ4xYA6-oaAB8r3usx0AgbdIiAMWoH7vSg).
* Meeting minutes can be found in the shared [Google Drive](https://drive.google.com/drive/folders/1qSUy2z0Mqt9-55XNTXxWzDKFUY9-2skr?usp=sharing).

## Setup
<details>
  <summary>Angular</summary>
  
  ### Local Setup
  * Download & install the latest version of [Node.js](https://nodejs.org/)
    * Check version | `$ > node -v`
  * Install CLI using npm | `$ > npm install -g @angular/cli`
    * Check version | `$ > ng --version`
    * Command Line Interface (CLI)
      * Scaffolds a project (proper folder structure)
      * Adds necessary configurations
      * Sets up server
  * Go to the workspace folder in the terminal
  ```
    $ > git clone https://github.com/NGT-Project-Team-B/Library-Management-System
    $ > cd Library-Management-System/ui

    // Install node libraries
    $ > npm install
  ```
  
  ### Development
  * Open workspace application folder in VSCode | `$ > code .`
  * CTRL + J will bring up the VSCode inline terminal | `$ > ng serve --open` or `$ > ng serve -o`
  * OR navigate to `http://localhost:4200`. The app will automatically reload if you change any source files.
</details>

<details>
  <summary>Spring Boot</summary>
  
  ### Local Setup
  * Download & install [Spring Tool Suite](https://spring.io/tools) for your preferred IDE to generate a new project.
  
  ### Development
  * Run the Spring Boot app by executing the main method from your IDE.
  * Navigate to `http://localhost:8080/api/books` to view the data of all books in `book.db`.
  * Navigate to `http://localhost:8080/api/users` to view the data of all users in `user.db`.
</details>
