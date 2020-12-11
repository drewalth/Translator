require('dotenv').config()
const token = process.env.GOOGLE_TRANSLATION_TOKEN
const messages = require("./_messages")
const fs = require('fs')
const translate = require('translate')

translate.engine = 'google';
translate.key = token;

const languages = ['af', 'sq', 'am', 'ar', 'hy', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'co', 'hr', 'cs', 'da', 'nl', 'et', 'fi', 'fr', 'ka', 'de', 'el', 'he', 'hi', 'hu', 'is', 'id', 'ga', 'it', 'ja', 'ko', 'lo', 'lv', 'lt', 'ne', 'no', 'ps', 'fa', 'pt', 'pa', 'ru', 'sm', 'sr', 'sk', 'sl', 'es', 'sw', 'sv', 'tl', 'th', 'tr', 'uk', 'vi']

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