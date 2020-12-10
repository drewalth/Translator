require('dotenv').config()
const token = process.env.GOOGLE_TRANSLATION_TOKEN
const messages = require("./_messages")
const fs = require('fs')
const translate = require('translate')

translate.engine = 'google';
translate.key = token;

const languages = ['es', 'fr', 'de', 'ja', 'ru', 'ar', 'zh', 'da', 'nl', 'fi', 'he', 'it', 'ko', 'no', 'pt', 'pl', 'sw', 'sv', 'th', 'tr', 'uk', 'vi', 'uz']

const translator = async (terms, lang) => {

  try {
    const translatedTerms = {}

    for (const term in terms) {
      translatedTerms[term] = await translate(terms[term], lang)
    }
    const langFile = fs.createWriteStream(`./translations/${lang}.js`);
    const input = JSON.stringify(translatedTerms)

    langFile.write(`export default ${input}`)
    langFile.end()
  } catch (error) {
    console.error('translator error: ', error)
  } finally {
    console.log(`${lang} translation complete.`)
    return
  }
}

(async function generateTranslations() {

  try {
    await Promise.all(languages.map(lang => translator(messages, lang)))
  } catch (error) {
    console.log('Generator error: ', error)
  } finally {
    process.exit(1)
  }

})();