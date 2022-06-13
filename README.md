## Steps to create a library

1. Create an Angular Project using ng new <PROJECT NAME> command.
2. Create a library inside the generated project using ng generate library <LIBRARY NAME>.
3. Create a component inside library by using ng g c <COMPONENT NAME> --project <LIBRARY NAME> and add the functionalities in it.
4. Add the component to the exports of module.ts file.
5. Add all the file that we want to expose to the customer in public-api.ts file.
6. Run ng build <LIBRARY NAME> to build the dist file and always run the command if any update is made in the library.
7. Then go to dist/<LIBRARY NAME> in cmd line and run npm pack to create the pack file(.tgz) file.
## To Publish It In NPM
8. Then we can login to our npm account using npm adduser in the cmd line and publish our library using npm publish cmd

# CreatingLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
