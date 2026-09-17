# Appointment Scheduler (Angular)

![Angular](https://img.shields.io/badge/Angular-15-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular%20Material-757de8?style=flat&logo=angular&logoColor=white)

A doctor **appointment scheduler** single-page app built with Angular 15. It shows an interactive
calendar where appointments can be viewed and booked, with an Angular Material dialog confirming
each booking.

> 📅 **One of my earlier projects — original, authored-by-hand code, built in January 2023 and
> preserved here exactly as originally written** (no later changes to the source).

## Features

- Interactive calendar with **day / week / month** views (`angular-calendar`)
- Book appointments through an **Angular Material** confirmation dialog
- Appointment data model grouping a doctor with their list of appointments
- **Bootstrap 5** styling and **FontAwesome** icons

## Tech stack

Angular 15 · TypeScript · Angular Material · angular-calendar · Bootstrap · date-fns

## Run locally

Install the dependencies from `package.json`, then start the dev server:

```bash
npm install
ng serve
```

Navigate to <http://localhost:4200/>; the app reloads automatically on source changes.

## Build

```bash
ng build   # build artifacts are written to dist/
```

---

*Built by [Emine Şevval Eş Uzunay](https://www.linkedin.com/in/eminesevvalesuzunay).*
