'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body.text
      let locale = req.body.locale
      console.log('"' + text + '"')
      
      if (text === undefined || !locale) {
        res.json({error: 'Required field(s) missing'});
        return
      }

      if (typeof text === "string" && text.trim().length === 0) {
        res.json({error: 'No text to translate'});
        return
      }

      if (locale != 'american-to-british' && locale != 'british-to-american') {
        res.json({error: 'Invalid value for locale field'});
      }


      let translation = translator.translate(text, locale, true)

      if (translation == text){
        res.json({text: text, translation:'Everything looks good to me!'});
      } else {
        res.json({text: text, translation:translation});
      }
      return
    });
};
