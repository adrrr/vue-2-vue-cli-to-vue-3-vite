### switch from vue cli to vite (commit 2)

- run these commands
```
npm r @vue/cli-plugin-babel @vue/cli-plugin-eslint @vue/cli-plugin-typescript @vue/cli-service sass-loader
npm i -D vite @vitejs/plugin-vue2
npm r core-js babel-eslint
npm i eslint@8 eslint-plugin-vue@8
```
- delete babel.config.js
- update .eslintrc.js
- create vite.config.js
- move index.html file and update it
- update package.json scripts

### use vue 3 setup in vue 2.7 (commit 3)

### switch from vue 2.7 to vue 3 (commit 5)
- remove all jest related libraries (they will be re added later)
- replace @vitejs/plugin-vue2 by @vitejs/plugin-vue
- install vue3
- replace "export default Vue.extend({" with "export default {"
- remove vue.config.js

### switch from jest to vitest (commit 6)
- run these commands
```
npm install -D vitest
npm install -D @vitejs/plugin-vue jsdom @vue/test-utils
```
- update package.json scripts
- create vitest.config.js
- update example.spec.ts
- update shims-vue.d.ts
