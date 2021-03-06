## Dashboard

Dashboard ECG project.

## Installation and Build

Run following commands (use --prod flag ofr production build): <br />
`npm install` <br />
`npm build` <br />

## Development environment

Run following commands: <br />
`python gendata.py` <br />
`nohup json-server --watch db.json&` <br />
`sudo ng serve` <br />

## Production environment

Run following commands: <br />
`python gendata.py` <br />
`nohup json-server --watch db.json&` <br />
`sudo ng serve --prod --host 0.0.0.0 --port 80 --disable-host-check&` <br />

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
