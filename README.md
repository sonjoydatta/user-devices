# User Devices

## Features

1. Configured with Vite. Vite pre-bundles dependencies using esbuild. Esbuild is written in Go and pre-bundles dependencies 10-100x faster than other JavaScript-based bundlers. [Learn more about vite](https://dev.to/karanpratapsingh/vite-is-too-fast-i8g)
2. The application is built using [TypeScript](https://www.typescriptlang.org)
3. React for displaying UI components
4. Styled-components for styling the UI components
5. Jest for testing the application

## Demo

This application is deployed on Vercel. Please check it out 😄 [here](https://user-devices.vercel.app).

## Installation

Clone the repository and run the following command:

```shell
git clone https://github.com/sonjoydatta/user-devices.git
```

Go to the directory and run the following command:

```shell
cd crypto-listing && yarn
```

For start the application in development mode, run the following command:

```shell
yarn dev
```

For start the application in production mode, run the following command:

```shell
yarn build && yarn preview
```

For test the application, run the following command:

```shell
yarn test
```

## Setup

```shell
Create .env file that includes the following variables

VITE_API_URL
```

## Languages & tools

- [vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [React](https://reactjs.org)
- [Styled-components](https://www.styled-components.com)
- [Jest](https://jestjs.io)
