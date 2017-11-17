module.exports = {
  root: true,
  env: {
    'es6': true
  },
  extends: [
    'plugin:turbopatent/node'
  ],
  rules: {
    'no-var': 'off',
    'no-tabs': 'off',
    'eqeqeq': 'off',
    // this rule is something about requiring the ember run loop with jQuery
    'ember/jquery-ember-run': 'off'
  }
};
