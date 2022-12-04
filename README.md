### switch from vue cli to vite

- run these commands
```
npm r @vue/cli-plugin-babel @vue/cli-plugin-eslint @vue/cli-plugin-typescript @vue/cli-plugin-unit-jest @vue/cli-service sass-loader
npm i -D vite @vitejs/plugin-vue2
npm r core-js babel-eslint
npm i eslint@8 eslint-plugin-vue@8
```
- delete babel.config.js
- update .eslintrc.js
- create vite.config.js
- move index.html file and update it
- update package.json scripts