const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('#1 Test POST /api/translate with text and locale', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({
            text: 'Mangoes are my favorite fruit.',
            locale: 'american-to-british'
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
            done();
          });
    });

    test('#2 Test POST /api/translate with text and invalid locale', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({
            text: 'Mangoes are my favorite fruit.',
            locale: 'american-to-american'
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, 'Invalid value for locale field');
            done();
          });
    });

    test('#3 Test POST /api/translate with missing text field', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({
            locale: 'american-to-british'
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, 'Required field(s) missing');
            done();
          });
    });

    test('#4 Test POST /api/translate with missing locale field', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({
            text: 'Mangoes are my favorite fruit.'
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, 'Required field(s) missing');
            done();
          });
    });

    test('#5 Test POST /api/translate with empty text', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({
            text: '',
            locale: 'american-to-british'
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, 'No text to translate');
            done();
          });
    });

    test('#6 Test POST /api/translate with text that needs no translation', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({
            text: 'I am a boy',
            locale: 'american-to-british'
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.translation, 'Everything looks good to me!');
            done();
          });
    });
});
