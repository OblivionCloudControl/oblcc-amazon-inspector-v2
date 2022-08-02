const { awscdk } = require('projen');
const cdkVersion = '2.34.2';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Steyn Huizinga',
  authorAddress: 'steyn.huizinga@oblcc.com',
  cdkVersion: cdkVersion,
  cdkVersionPinning: true,
  defaultReleaseBranch: 'main',
  jsiiFqn: 'projen.AwsCdkConstructLibrary',
  name: 'oblcc-amazon-inspector-v2',
  repositoryUrl: 'https://github.com/steyn/oblcc-amazon-inspector-v2.git',
  github: false,
  // cdkDependencies: undefined,      /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  // deps: [],                        /* Runtime dependencies of this module. */
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  description: 'This construct can be used to automate provisioning of Amazon Inspector 2',
  // devDeps: [],                     /* Build dependencies for this module. */
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
  keywords: [
    'aws',
    'aws-cdk',
    'cdk',
    'cdk-construct',
    'inspector',
    'inspector2',
  ],
  dependabot: false,
  python: {
    distName: 'oblcc-amazon-inspector-v2',
    module: 'oblcc-amazon-inspector-v2',
  },
  gitignore: [
    'cdk.out/',
  ],
  scripts: {
    synth: 'npx cdk synth --app=./lib/integ.default.js',
  },
});
project.synth();
