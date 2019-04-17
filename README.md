# ThisDotExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

[![Build Status](https://travis-ci.com/wescopeland/this-dot-exercise.svg?branch=master)](https://travis-ci.com/wescopeland/this-dot-exercise)
[![Coverage Status](https://coveralls.io/repos/github/wescopeland/this-dot-exercise/badge.svg?branch=master)](https://coveralls.io/github/wescopeland/this-dot-exercise?branch=master)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Highlights

- [Akita](https://github.com/datorama/akita) is used for state management
- A combination of Angular Material and Bootstrap 4's grid system are utilized for look and feel
- 💪 It's a PWA
- 💪💪 Deployed on Heroku w/ Angular Universal for SSR and faster first contentful paint
- 96/100 Lighthouse performance score
- GraphQL was used in favor of the REST API to meet the project requirements with the fewest possible API calls. This is the first time I've ever used GraphQL in any context 😱 ~ but I really enjoyed the challenge and learning experience.
- Jest is favored over Jasmine for unit testing
- [Spectator](https://github.com/NetanelBasal/spectator) is used as syntactic sugar over TestBed
- I first drew low-fidelity ideas on paper, then created highish-fidelity wires in Figma which can be found [here](https://www.figma.com/file/EXE9MXuA7lxVqDShUwUd9AmG/This-Dot-Exercise?node-id=0%3A1)

## Development server

**You will need to add your GitHub OAuth key to `src/environments/environment.ts`.**

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production build

There is a `heroku-postbuild` task that populates the OAuth key from process.env. This key only has read privileges.

`npm run build:ssr` builds the project. `npm run start` can then be used to launch a server powered by Express and Angular Universal.

## Running unit tests

Run `ng test` to execute the unit tests via Jest.