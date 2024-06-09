const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator()

suite('Unit Tests', () => {
    test('#1 Test Translation', function (done){
        let translation = 'american-to-british'
        let input = 'Mangoes are my favorite fruit.'
        let expectedOutput = 'Mangoes are my favourite fruit.'
        let output = translator.translate(input, translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();

    })

    test('#2 Test Translation', function (done){
        let translation = 'american-to-british'
        let input = 'I ate yogurt for breakfast.'
        let expectedOutput = 
        'I ate yoghurt for breakfast.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();

    })

    test('#3 Test Translation', function (done){
        let translation = 'american-to-british'
        let input = 'We had a party at my friend\'s condo.'
        let expectedOutput = 'We had a party at my friend\'s flat.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#4 Test Translation', function (done){
        let translation = 'american-to-british'
        let input = 'Can you toss this in the trashcan for me?'
        let expectedOutput = 'Can you toss this in the bin for me?'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#5 Test Translation', function (done){
        let translation = 'american-to-british'
        let input = 'The parking lot was full.'
        let expectedOutput = 'The car park was full.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#6 Test Translation', function (done){
        let translation = 'american-to-british'
        let input = 'Like a high tech Rube Goldberg machine.'
        let expectedOutput = 'Like a high tech Heath Robinson device.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#7 Test Translation', function (done){
        let translation = 'american-to-british'
        let input = 'To play hooky means to skip class or work.'
        let expectedOutput = 'To bunk off means to skip class or work.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#8 Test Translation', function (done){
        let translation = 'american-to-british'
        let input = 'No Mr. Bond, I expect you to die.'
        let expectedOutput = 'No Mr Bond, I expect you to die.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#9 Test Translation', function (done){
        let translation = 'american-to-british'
        let input = 'Dr. Grosh will see you now.'
        let expectedOutput = 'Dr Grosh will see you now.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#10 Test Translation', function (done){
        let translation = 'american-to-british'
        let input = 'Lunch is at 12:15 today.'
        let expectedOutput = 'Lunch is at 12.15 today.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#11 Test Translation', function (done){
        let translation = 'british-to-american'
        let input = 'We watched the footie match for a while.'
        let expectedOutput = 'We watched the soccer match for a while.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#12 Test Translation', function (done){
        let translation = 'british-to-american'
        let input = 'Paracetamol takes up to an hour to work.'
        let expectedOutput = 'Tylenol takes up to an hour to work.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#13 Test Translation', function (done){
        let translation = 'british-to-american'
        let input = 'First, caramelise the onions.'
        let expectedOutput = 'First, caramelize the onions.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#14 Test Translation', function (done){
        let translation = 'british-to-american'
        let input = 'I spent the bank holiday at the funfair.'
        let expectedOutput = 'I spent the public holiday at the carnival.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#15 Test Translation', function (done){
        let translation = 'british-to-american'
        let input = 'I had a bicky then went to the chippy.'
        let expectedOutput = 'I had a cookie then went to the fish-and-chip shop.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#16 Test Translation', function (done){
        let translation = 'british-to-american'
        let input = 'I\'ve just got bits and bobs in my bum bag.'
        let expectedOutput = 'I\'ve just got odds and ends in my fanny pack.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#17 Test Translation', function (done){
        let translation = 'british-to-american'
        let input = 'The car boot sale at Boxted Airfield was called off.'
        let expectedOutput = 'The swap meet at Boxted Airfield was called off.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#18 Test Translation', function (done){
        let translation = 'british-to-american'
        let input = 'Have you met Mrs Kalyani?'
        let expectedOutput = 'Have you met Mrs. Kalyani?'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#19 Test Translation', function (done){
        let translation = 'british-to-american'
        let input = 'Prof Joyner of King\'s College, London.'
        let expectedOutput = 'Prof. Joyner of King\'s College, London.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#20 Test Translation', function (done){
        let translation = 'british-to-american'
        let input = 'Tea time is usually around 4 or 4.30.'
        let expectedOutput = 'Tea time is usually around 4 or 4:30.'
        let output = translator.translate(input,translation);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#21 Test Translation', function (done){
        let translation = 'american-to-british'
        let input = 'Mangoes are my favorite fruit.'
        let expectedOutput = 'Mangoes are my <span class="highlight">favourite</span> fruit.'
        let output = translator.translate(input,translation,true);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#22 Test Translation', function (done){
        let translation = 'american-to-british'
        let input = 'I ate yogurt for breakfast.'
        let expectedOutput = 'I ate <span class="highlight">yoghurt</span> for breakfast.'
        let output = translator.translate(input,translation,true);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#23 Test Translation', function (done){
        let translation = 'british-to-american'
        let input = 'We watched the footie match for a while.'
        let expectedOutput = 'We watched the <span class="highlight">soccer</span> match for a while.'
        let output = translator.translate(input,translation,true);
        assert.equal(output,expectedOutput,'translated output not match');
        done();
    })

    test('#24 Test Translation', function (done){
        let translation = 'british-to-american'
        let input = 'Paracetamol takes up to an hour to work.'
        let expectedOutput = '<span class="highlight">Tylenol</span> takes up to an hour to work.'
        let output = translator.translate(input,translation,true);
        assert.equal(output,expectedOutput,'translated output not match');
        done();

    })
});
