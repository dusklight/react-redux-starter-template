# React & Redux Starter Template
A react starter template that includes/uses:
- react
- react-bootstrap
- redux
- fetch
- babel
- webpack

Demo: https://dusklight.github.io/react-redux-starter-template/src/

It includes a rudimentary but functional app that retrieves Github user information.

This is meant to be used as a learning tool for now, definitely not production ready.

## To Compile and Run
- Compile:
  - `npm run webpack` (this will create the index.min.js as specified in webpack.config.js)
- Webpack Dev Server:
  - `npm run dev` (This will not create/update the index.min.js. Note that any changes made *while* running the webpack dev server will recompile to index.min.js)
  - Browse to http://localhost:8080/

## TODO
- Add unit-tests
- Separate out dependencies and devDependencies.  For now, all were installed as dependencies, e.g., `npm install --save [package]`
- Separate dev and production builds in webpack, and perhaps not use the minified output for dev.
- Add linter, and maybe make semicolons required? (https://github.com/airbnb/javascript#20.1)
- Add more PropTypes
- Add FlowJS
- Add:
  - .editorconfig ?
  - .babelrc ?
- Expand .gitignore as needed
- See comments and TODO's in source code.

## Notes
- Loosely based on Async Actions example: http://redux.js.org/docs/advanced/ExampleRedditAPI.html, and other training examples found on the net.
- Editor used: Atom.
- Main browser used to test: Chrome, with additional React and Redux debugging extensions.
