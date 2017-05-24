Learning React and Redux Course Notes
===========================

## Overview

This repository is where I will be working out of to learn the popular [React](https://facebook.github.io/react/) JavaScript framework and [Redux](http://redux.js.org/docs/introduction/). This course is being taught by Stephen Grider and can be found on [Udemy](https://www.udemy.com/react-redux/learn/v4). This ReadMe will be where I keep notes on what I am being taught.

Plan of Course:
- Get Boilerplate Project
- Gain Familiarity of React
- Learn General Data Modeling
- Dive into Redux

## React Notes

- Our project files need tooling to transpile our code, we use Webpack and Babel to do this.
- NPM (node package manager), used to load in some dependancies.
- Components are snippets of code that produce HTML.
- Writing React involves writing lots of components and using them together to create complex applications.
- Traditional React applications have distributed components.
- Want to decide how to break up application into components.
- Always one component per file.
- package.json is a list of all of the dependancies our project has.
- Components that are not classes are called functional components.
- Another type of component is called a class component.
- Every class based component needs a render method.
- State is one of the hardest topics to understand in React.
- State is plain JS object to record and react to user events.
- Each component has a state, when it changes the component re-renders.
- A controlled input element the value defined by the state.
- Downwards data flow, only the most parent component should be responsible for fetching data.
- Props are a good example of downward data flow.
- Always good to set a key for an item when rendering a list of data, so React can update without re-rendering entire list.

## Redux Notes
- Redux is more related to the data contained in the application.
- A collection of all of the data that describes the app.
- Redeux is application level state, React is component level state.
- It's critical to be good at modeling the state of your app.
- Reducers is a function that returns a piece of the applications state.
- Reducers produce the value of our state.
- A container is a React component that has a direct relation to the state manager by Redux.
- We want components that care about state to be components.
- Only the most parent component that needs state is needed, children can leverage that.
- Action creators return an object, has a type that describes the action that occurred.
- Actions are automatically sent to all reducers in application.
