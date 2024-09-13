import globals from 'globals';
import prettier from 'eslint-plugin-prettier/recommended';
// jhipster-needle-eslint-add-import - JHipster will add additional import here

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  // jhipster-needle-eslint-add-config - JHipster will add additional config here
  prettier,
];
