# Translator

A simple language file generator designed to be used with [vue-i18n](https://kazupon.github.io/vue-i18n/), built with [Translate](https://www.npmjs.com/package/translate).
 
First you must get a Google Cloud Translation API Key. 

```
cp .env.default .env
```

```
GOOGLE_TRANSLATION_TOKEN= <your_token>
```

Run generator
```
node app.js
```

Translated files will be outputted in the `translations/` directory.