# ThisDotExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

[![Build Status](https://travis-ci.com/wescopeland/this-dot-exercise.svg?branch=master)](https://travis-ci.com/wescopeland/this-dot-exercise)
[![Coverage Status](https://coveralls.io/repos/github/wescopeland/this-dot-exercise/badge.svg?branch=master)](https://coveralls.io/github/wescopeland/this-dot-exercise?branch=master)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Development server

**You will need to add your GitHub OAuth key to `src/environments/environment.ts`.**

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production build

There is a `heroku-postbuild` task that populates the OAuth key from process.env. This key only has read privileges.

`npm run build:ssr` builds the project. `npm run start` can then be used to start a server powered by Express and Angular Universal.

## Running unit tests

Run `ng test` to execute the unit tests via Jest.