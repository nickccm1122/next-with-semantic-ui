# next-with-semantic-ui

## Frameworks

Main frameworks used

1. ReactJS
1. Webpack
1. Redux
1. [Semantic UI](https://react.semantic-ui.com/introduction)

## How to start

1. `yarn`
1. `yarn dev` for development
1. `yarn start` for production

## Theming

We use [Semantic-UI](https://react.semantic-ui.com/introduction) as our theme

In order to reduce the theme's bundle size, we can manually pick the needed components provided by Semantic UI.

To customise Semantic-UI, follow [Theming](https://semantic-ui.com/usage/theming.html)

After overriding default Semantic UI, use a build command to update the resulting css file

```
yarn build:semantic
```