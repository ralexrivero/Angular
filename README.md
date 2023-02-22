# Angular

**Angular** is *JavaSCript* framework for building client-side applications that run entirely in the client browser using **HTML**, **CSS** and **TypeScript**.

## Environment

[![Ubuntu](https://img.shields.io/static/v1?label=&message=Ubuntu&color=E95420&logo=Ubuntu&logoColor=E95420&labelColor=2F333A)](https://ubuntu.com/)<!-- ubuntu -->
[![Bash](https://img.shields.io/static/v1?label=&message=GNU%20Bash&color=4EAA25&logo=GNU%20Bash&logoColor=4EAA25&labelColor=2F333A)](https://www.gnu.org/software/bash/)<!-- bash -->
[![Docker](https://img.shields.io/static/v1?label=&message=Docker&color=2496ED&logo=Docker&labelColor=2F333A)](https://hub.docker.com)<!-- docker -->

[![Git](https://img.shields.io/static/v1?label=&message=Git&color=F05032&logo=Git&logoColor=F05032&labelColor=2F333A)](https://git-scm.com/)<!-- git -->
[![Github](https://img.shields.io/static/v1?label=&message=GitHub&color=181717&logo=GitHub&logoColor=f2f2f2&labelColor=2F333A)](https://github.com)<!-- github -->

[![VS Code](https://img.shields.io/static/v1?label=&message=Visual%20Studio%20Code&color=007ACC&logo=Visual%20Studio%20Code&logoColor=007ACC&labelColor=2F333A)](https://code.visualstudio.com/)<!-- vs code -->

[![node.js](https://img.shields.io/static/v1?label=&message=Node.js&color=339933&logo=Node.js&logoColor=339933&labelColor=F5F5F5)](https://nodejs.org/en/)<!-- Node.js -->
[![npm](https://img.shields.io/static/v1?label=&message=npm&color=CB3837&logo=npm&logoColor=CB3837&labelColor=F5F5F5)](https://www.npmjs.com/)<!-- npm -->
[![TypeScript](https://img.shields.io/static/v1?label=&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=3178C6&labelColor=2F333A)](https://www.typescriptlang.org/)<!-- TS -->
[![Angular](https://img.shields.io/static/v1?label=&message=AngularJS&color=E23237&logo=AngularJS&logoColor=E23237&labelColor=F5F5F5)](https://angularjs.org/)<!-- Angular.js -->

[![Bootstrap](https://img.shields.io/static/v1?label=&message=Bootstrap&color=7952B3&logo=Bootstrap&logoColor=7952B3&labelColor=2F333A)](https://getbootstrap.com/)<!-- Bootstrap -->
[![Font Awesome](https://img.shields.io/static/v1?label=&message=Font%20Awesome&color=528DD7&logo=Font%20Awesome&logoColor=528DD7&labelColor=F5F5F5)](https://fontawesome.com/)<!-- Font Awesome -->

- `Angular CLI`

## Wiki Pages

- [Angular Wiki](https://github.com/ralexrivero/Angular/wiki)

## Angular projects

- [APM](./apm/) - Angular Product Management
- [my-app](./my-app/) - Angular default project generated by `Angular CLI`

## Getting Started

You can either use the [Dockerfile](./Dockerfile) to build the image or pull the image from `Docker Hub`.

- `docker pull ralexrivero/node-alp-18:1.0` to pull the image
- `docker build -t angular/node_18/alpine -f Dockerfile .` to build the image

- `git clone` the project
- `cd` to the project directory
- `docker run -d -it --rm --name node -v /path/to/code/:/code --network=host node-alp-18:1.0` to start a container with `node.js`
- `docker exec -it node sh` to enter the container
- `cd` the project directory
- `npm i` to install *dependencies* (node_modules) and *devDependencies* from `package.json`
- `npm start` to start the application

## Packages

- `@angular/cli` - Angular CLI
- `bootstrap` - Bootstrap
- `font-awesome` - Font Awesome

## Author

[![Twitter](https://img.shields.io/twitter/follow/ralex_uy?style=social)](https://twitter.com/ralex_uy) <!-- twitter -->
[![Linkedin](https://img.shields.io/badge/LinkedIn-+28K-blue?style=social&logo=linkedin)](https://www.linkedin.com/in/ronald-rivero/) <!-- linkedin -->
[![Medium](https://img.shields.io/static/v1?label=&message=Medium&color=000000&logo=Medium&logoColor=000000&labelColor=888888)](https://medium.com/@ralexrivero)<!-- medium -->
[![Github](https://img.shields.io/github/followers/ralexrivero?style=social)](https://github.com/ralexrivero/) <!-- github -->
[![Vagrant](https://img.shields.io/static/v1?label=&message=Vagrant%20Profile&color=1868F2&logo=vagrant&labelColor=2F333A)](https://app.vagrantup.com/ralexrivero) <!-- vagrant -->
[![Docker](https://img.shields.io/static/v1?label=&message=Docker%20Profile&color=2496ED&logo=Docker&labelColor=2F333A)](https://hub.docker.com/u/ralexrivero) <!-- docker -->

[![CodersRank](https://img.shields.io/static/v1?label=&message=Coders%20Rank&color=67A4AC&logo=CodersRank&logoColor=67A4AC&labelColor=2F333A)](https://profile.codersrank.io/user/ralexrivero) <!-- codersrank -->
[![HackersRank](https://img.shields.io/static/v1?label=&message=Hacker%20Rank&color=00EA64&logo=HackerRank&logoColor=00EA64&labelColor=2F333A)](https://www.hackerrank.com/ralexrivero) <!-- hackerrank -->
<!-- Behance -->
<!-- website -->