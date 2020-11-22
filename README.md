# React Ant Design Demo

Project demo using React/TypeScript & Ant Design

Demo at [https://react-ant-demo.netlify.app](https://react-ant-demo.netlify.app)

- [react-antd-demo](#react-antd-demo)
  - [Getting Started](#getting-started)
  - [Create Layout, Components & Routes](#create-layout-components--routes)
## Getting Started

- Using [create-react-app](https://create-react-app.dev/) to create project
  ```bash
  $ yarn create react-app react-antd-demo --template typescript
  # or
  $ npm create-react-app react-antd-demo --template typescript
  ```
- Install important dependencies

  If you want to create  a complex app with Router and Management State, you need to install more dependencies after using create-react-app

  ```bash
  $ yarn add redux react-redux react-router react-router-dom redux-thunk axios
  $ yarn add @types/redux @types/react-redux @types/react-router @types/react-router-dom @types/redux-thunk
  ```
- Install **Ant Design**
  ```bash
  $ yarn add antd @ant-design/icons
  ```
- Install package `node-sass`
  It allows import and use **scss** or **sass** in React project
  ```bash
  $ yarn add node-sass@4.14.1
  ```
  Why use node-sass@4.14.1? Because, in the moment that I work in this project, there are some bugs of the latest version of **node-sass** with React.

- If you want to use ESLint & Prettier in your project, you can check my blog [how to config ESlint & Prettier in React Project](https://blog.adev42.com/config-esling-prettier-react-app)

## Create Layout, Components & Routes
Follow the files in projects
