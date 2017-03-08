# Front end builds pack for Ember.JS

This deploy pack packages all of the addons needed to deploy an Ember.JS
application to a [Frontend Builds](https://github.com/tedconf/front_end_builds)-enabled server.

## Install

```
ember install ember-cli-deploy
ember install ember-cli-deploy-front-end-builds-pack
```

It will ask to overwrite your `config/deploy.js`, enter yes.

## Configure

First, open `config/deploy.js` and enter your application name, staging
hostname, and production hostname.

Next you'll need to make sure you have the following ENV vars set.

ENV | Notes
--- | ---
`FEB_AWS_ACCESS_KEY_ID` | Your FEB AWS key
`FEB_AWS_SECRET_ACCESS_KEY` | Your FEB AWS secret
`FEB_AWS_BUCKET_NAME` | The bucket you are deploying to
`FEB_DEPLOY_KEY` | The path to the private key that will be used to sign your front ends. This should correspond to the public key that you register in the Front-End Builds Admin interface.

### Ember asset-rev

Since we're deploying assets to S3 you'll want to have asset-rev
pointing to the correct place. You should add the following to
`ember-cli-build.js`.

```javascript
var app = new EmberApp(defaults, {
  // Add options here
  fingerprint: {
    prepend: 'https://s3.amazonaws.com/<BUCKET_NAME>/<APP_NAME>/'
  }
});
```

Note you should fill in the correct `BUCKET_NAME` and `APP_NAME`.

## Deploy

Run `ember deploy <stage>` to deploy your Ember app.

Examples:

```
ember deploy production
ember deploy staging
```

