const ngxWallabyJest = require('ngx-wallaby-jest');

module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.+(ts|html|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      'tsconfig.json',
      'jest.config.js',
      'src/tsconfig.spec.json',
      '!src/**/*.spec.ts'
    ],

    tests: ['src/app/**/*.spec.ts'],

    env: {
      type: 'node',
      runner: 'node'
    },
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({ module: 'commonjs' })
    },
    setup: function(wallaby) {
      const config = require('./jest.config.js');
      Object.keys(config.moduleNameMapper).forEach(
        k =>
          (config.moduleNameMapper[k] = config.moduleNameMapper[k].replace(
            '<rootDir>',
            wallaby.localProjectDir
          ))
      );
      wallaby.testFramework.configure(config);
    },
    preprocessors: {
      // This translate templateUrl and styleUrls to the right implementation
      // For wallaby
      'src/**/*.component.ts': ngxWallabyJest
    },
    testFramework: 'jest'
  };
};
