# Front end builds pack for Ember.JS

This deploy pack  packages all of the addons needed to deploy Ember.JS
application to a front end builds server.

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
`FEB_DEPLOY_KEY` | The path to the key used to sign you front ends

## Deploy

Run `ember deploy <stage>` to deploy your Ember app.

Examples:

```
ember deploy production
ember deploy staging
```

