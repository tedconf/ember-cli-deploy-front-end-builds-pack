/* jshint node: true */

// Configure this stuff...
var app = 'YOUR_FEB_APP_NAME_HERE';
var stagingHost = 'https://STAGING_HOSTNAME';
var productionHost = 'https://PRODUCTION_HOSTNAME';



module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    s3: {
      accessKeyId: process.env.FEB_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.FEB_AWS_SECRET_ACCESS_KEY,
      bucket: process.env.FEB_AWS_BUCKET_NAME,
      region: 'us-east-1',
      prefix: app,
    },
    'front-end-builds': {
      app: app,
      privateKey: process.env.FEB_DEPLOY_KEY
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    ENV['front-end-builds'].endpoint = 'http://localhost:3000';
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    ENV['front-end-builds'].endpoint = stagingHost;
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV['front-end-builds'].endpoint = productionHost;
  }

  return ENV;
};
