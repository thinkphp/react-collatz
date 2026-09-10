<<<<<<< HEAD
# react-collatz
=======
# React + Vite

# React Collatz

A simple React application built with Vite that calculates the Collatz sequence for a given positive integer.

## About

The Collatz sequence is defined as follows:

* If `n` is even: `n = n / 2`
* If `n` is odd: `n = 3n + 1`
* The process continues until `n = 1`

For example, starting with `6`:

```text
6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

## Technologies

* React
* Vite
* JavaScript
* ESLint

## Run locally

Clone the repository:

```bash
git clone https://github.com/thinkphp/react-collatz.git
cd react-collatz
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the URL shown by Vite, usually:

```text
http://localhost:5173/
```

## Build

Create a production build:

```bash
npm run build
```

The generated files are placed in the `dist/` directory.

## Deployment

The application is deployed to GitHub Pages.

```bash
npm run deploy
```

Live application:

https://thinkphp.github.io/react-collatz/
>>>>>>> b040973 (readme)
