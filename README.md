# Translator
 
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