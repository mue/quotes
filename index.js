const quotes = require('./quotes.json');

module.exports = class Quotes {
    static random() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    static all() {
        return quotes;
    }
}