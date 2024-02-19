# Evalart Interview README
This project solves the interview challenge provided by Noosa Labs team. For this project I used ant design system since I consider that it takes less time to configure and that is easily customizable to our needs. I tried having an atomic approach for the page components. I also used react query for handling server requests and axios. This project is currently hosted in an aws s3 static website.

There are two different ways to visualize the website, the first one is by running the project locally and the second one is by going through the following [link](http://evalart-interview.s3-website-us-east-1.amazonaws.com)

To run the project locally follow these steps:
1. Run yarn or npm install
2. Run yarn mock-server or npm run mock-server
3. Run yarn dev or npm run dev

## What would I have done if I had more time
- I would definitely have hosted my server in an ec2 or in a dynamoDB instance but I had not enough time to create an appropriate back end.
- I would have added functionality or linking to all the hyperlinks in the website.
- I would have used i18n library to manage different languages.
- I would have added unit testing and end to end testing using vitest and cypress.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
