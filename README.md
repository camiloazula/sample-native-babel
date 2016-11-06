# Seed for Nativescript + webpack 2 + babel + Angular 2: 
## Stack without typescript!

Tested with:

- NodeJS v7
- nativescript@next 

> Important: Webpack is called by './hooks/after-prepare/nativescript-dev-webpack.js'
> For android dont forget to set the ANDROID_HOME e.g.```export ANDROID_HOME=/usr/local/Cellar/android-sdk/24.4.1_1```
This is not for production, just grab the parts that you need for your project

Trouble shooting:
SDK incompatibles:
In OSx please define in you ~/.profile as follows:

```bash
export ANDROID_HOME=/Users/camiloazula/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

