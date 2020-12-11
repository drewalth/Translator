# Translator

A simple language file generator intended to be used with [vue-i18n](https://kazupon.github.io/vue-i18n/), built with [Translate](https://www.npmjs.com/package/translate). Please note, this relies on Google Translate, the accuracy of the translations may not be the best. 
 
First, you must get a Google Cloud Translation API Key. 

```
cp .env.default .env
```

```
GOOGLE_TRANSLATION_TOKEN=<your_token>
```

Add your translations:

```js
// _messages.js

module.exports = {
  account: 'Account',
  email: 'Email',
  hello: 'Hello',
  login: 'Login',
  logout: 'Logout',
  password: 'Password'
};
```

Tailor your languages:

```js
// L10 app.js

const languages = ['af', 'sq', 'am', 'ar', 'hy', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'co', 'hr', 'cs', 'da', 'nl', 'et', 'fi', 'fr', 'ka', 'de', 'el', 'he', 'hi', 'hu', 'is', 'id', 'ga', 'it', 'ja', 'ko', 'lo', 'lv', 'lt', 'ne', 'no', 'ps', 'fa', 'pt', 'pa', 'ru', 'sm', 'sr', 'sk', 'sl', 'es', 'sw', 'sv', 'tl', 'th', 'tr', 'uk', 'vi']
```

Run generator
```
node app.js
```

Translated files will be outputted in the `translations/` directory.