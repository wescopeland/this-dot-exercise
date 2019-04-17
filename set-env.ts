const writeFile = require('fs').writeFile;
const argv = require('yargs').argv;

require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment;
const isProd = environment === 'prod';

let targetPath = null;

if (environment === 'dev') {
  targetPath = './src/environments/environment.ts';
} else {
  targetPath = `./src/environments/environment.${environment}.ts`;
}

const envConfigFile = `
export const environment = {
  production: ${isProd},
  githubOauth: "${process.env.githubOauth}",
};
`;
writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
