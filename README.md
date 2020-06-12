# Wefox technical assessment - short questions

## Introduction

Hi, I decided to "go overboard" with the answers to the simpler coding questions and wrap the required functions up in a rather contrived way, to demonstrate a bit more.

I've been a TDDer since learning PHP in 2009, and I typically take a test-driven approach when developing software. I also prefer to keep an eye on code coverage, to make sure I'm doing TDD well (i.e. only writing the code required to make the test pass, with no waste). We're using the nyc library here to measure code coverage, and the code coverage report is generated when running the tests using the `npm test` command.

## How to use

1. Check out the codebase
2. Install the libraries with `npm install`
3. Run the tests with `npm test`