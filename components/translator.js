const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    replace(text, mapArr, options=[]){
        let result = text
        let firstcap = options.indexOf('firstcap')>=0?true:false
        let highlight = options.indexOf('highlight')>=0?true:false

        //console.log(firstcap)
        //console.log(highlight)
        
        mapArr.map((phraseArr)=>{

            // if last searching character is a seperator like (mr.)
            // then no need to match a seperator at the end
            let lastPhraseChar, postSearch, postReplace

            lastPhraseChar = phraseArr[0][phraseArr[0].length-1]
            if (/[-\w]/.test(lastPhraseChar)){   // last search char is not seperator 
                postSearch = '([^-\\w]|$)'
                postReplace = '$2'
            } else {   //last search char is already seperator
                postSearch = ''
                postReplace = ''
            }

            let firstPhraseChar, preSearch, preReplace
            firstPhraseChar = phraseArr[0][0]
            if (/[-\w]/.test(firstPhraseChar)) {
                preSearch = '(^|[^-\\w])'
                preReplace = '$1'
            } else {
                preSearch = ''
                preReplace = ''  
            }

            let regExp = new RegExp(preSearch +phraseArr[0]+ postSearch,'gi')
            let replaceStr = phraseArr[1]
            if (firstcap) replaceStr = this.capitalize(replaceStr);
            if (highlight) 
                replaceStr = '<span class="highlight">' + replaceStr + '</span>';
    
            //console.log(regExp + " " + replaceStr )

            result = result.replaceAll(regExp, preReplace + replaceStr + postReplace);
        })
        //console.log(result);
        return result;
    }
    
    replaceTime(text, locale, options = []){
        let highlight = options.indexOf('highlight')>=0?true:false
        let searchRex="", replaceRex=""

        if (locale == 'american-to-british'){
            searchRex = /([0-9]?[0-9]):([0-9][0-9])/g
            if (highlight)
                replaceRex = '<span class="highlight">' + '$1.$2' + '</span>'   
            else
                replaceRex = '$1.$2'
        }

        if (locale == 'british-to-american'){
            searchRex = /([0-9]?[0-9]).([0-9][0-9])/g
            if (highlight)
                replaceRex = '<span class="highlight">' + '$1:$2' + '</span>'   
            else
                replaceRex = '$1:$2'
        }

        text = text.replaceAll(searchRex, replaceRex)

        return text
    }

    translate(text, locale, highlight=false) {

        let result = text
        let spellingArr, titleArr, onlyArr
        if (locale == 'american-to-british') {  
            spellingArr = 
            Object.keys(americanToBritishSpelling)
            .map((key)=>[key,americanToBritishSpelling[key]])
            //console.log(spellingArr);

            titleArr = 
            Object.keys(americanToBritishTitles)
            .map((key)=>[key,americanToBritishTitles[key]])
            //console.log(titleArr);

            onlyArr=
            Object.keys(americanOnly)
            .map((key)=>[key, americanOnly[key]])
            //console.log(onlyArr);
        }

        if (locale =='british-to-american') {
            // americanToBritishSpelling -- reverse 
            spellingArr = 
            Object.keys(americanToBritishSpelling)
            .map((key)=>[americanToBritishSpelling[key],key])
            //console.log(spellingArr);

            // americanToBritishTitles -- reverse
            titleArr = 
            Object.keys(americanToBritishTitles)
            .map((key)=>[americanToBritishTitles[key],key])
            //console.log(titleArr);

            // britishOnly
            onlyArr=
            Object.keys(britishOnly)
            .map((key)=>[key, britishOnly[key]])
            //console.log(onlyArr);
        }
  
        let option = []
        if (highlight) option.push('highlight');

        //console.log(option)
        // Replace time
        result = this.replaceTime(result, locale, option)

        //Replace spelling and locale only phrase
        result = this.replace(result, spellingArr, option);
        result = this.replace(result, onlyArr, option);

        // Replace title
        option.push('firstcap');
        result = this.replace(result, titleArr, option);

        //console.log('result: ' + result)
        return result;
    }

    capitalize(s)
    {
        return s[0].toUpperCase() + s.slice(1);
    }
}

module.exports = Translator;