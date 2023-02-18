# Angular

Angular is JavaSCript framework for building client-side applications that run entirely in the client browser using HTML, CSS and TypeScript.

## Environment

- VS Code
- npm
- node.js
- typescript
- Angular
- Angular CLI

npm dpendencies are packages required for development and deployment
npm devDependencies are packages required for development only

## Getting Started

- `docker run -d -it --rm --name node -v /home/ralex/code/:/code --network=host node-alp-18:1.0` to start a container with node.js
- `docker exec -it node sh` to enter the container
- `cd` the project directory
- `npm i` to install *dependencies* (node_modules) and *devDependencies* from `package.json`
- `npm start` to start the application
- `npm install -g @angular/cli` to install Angular CLI
- `ng new my-app --prefix pm` to create a new Angular application with prefix `pm`

> `--prefix` is the prefix for the generated selectors. The default prefix is `app`. The prefix is used to generate the selectors for the components, directives, and pipes.

## Angular CLI
