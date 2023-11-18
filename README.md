# ITIS-6177-Automatic_API_Generator

For Automatic API Generator I have used loopback tool. From all the tools mentioned in the instructions I find loopback tool interesting and easy to use.
It streamlines the creation of RESTful APIs by offering developers tools and conventions. An important aspect of LoopBack is its capability to generate APIs automatically, leveraging model specifications.
The following steps I followed to generate an automatic API are as follows.
1) npm i -g @loopback/cli
2) lb4 app
3) Project name: getting-started
4) Project description: Getting started tutorial
5) Project root directory: getting-started
6) Application class name: StarterApplication
7) Select features to enable in the project:
    ❯◉ Enable eslint: add a linter with pre-configured lint rules
8) cd getting-started
9) npm start
    After this I encountered and error as **'lb-clean' is not recognized as an internal or external command, operable program or batch file.**
    But I resolved that using following commands
    * npm install --ignore-scripts
    * npm rebuild
10) http://127.0.0.1:3000/ping
      After this I was able to see my application running
11) lb4 controller
12) Controller class name: helloFirst
13) What kind of controller would you like to generate? Empty Controller
      Controller helloFirst was now created in src/controllers/
14) Then I have added the following code to the src/controllers/hello-first.controller.ts file
      import {get} from '@loopback/rest';

      export class HelloFirstController {
        @get('/hellofirst')
        hellofirst(): string {
          return 'Hello world!!!';
        }
      }
15) npm start
16) http://127.0.0.1:3000/hellofirst
      And I am able to see Hello World!!! 
