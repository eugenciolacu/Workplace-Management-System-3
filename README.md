# Workplace-Management-System-3

# workplace-management-system
1. install nvm 1.1.9
https://github.com/coreybutler/nvm-windows/releases
 
2. from git bash as administrator install node
$ nvm install 18.12.0
 
3. use installed version of node
$ nvm use 18.12.0
 
4. install vue cli and vue-router for fue 3
$ npm install -g @vue/cli@5.0.8
$ npm install vue-router@4

4.1 when set on another computer after cloning git go to project folder 'workplace-management-system' and
$ npm install
this will install missing packages globally
Ignore 5 and 6 steps.
 
5. create vue project
$ winpty vue.cmd create workplace-management-system
 
Manually select features
 
Babel
TypeScript
Linter / Formatter
 
3.x
 
use class-style component syntax?	n
 
Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? y

ESLint + Airbnb config

Lint on save

In dedicated config files

6. Get started with
$ cd workplace-management-system
$ npm run serve

7. (optional) Install next extensions in VS Code
ESLint
Vue Language Features (Volar)