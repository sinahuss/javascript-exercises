const palindromes = function (phrase) {
    var lower = phrase.toLowerCase().replace(/[\W_]/g, '');
    var reverse = lower.split('').reverse().join('');
    return reverse == lower;
};

// Do not edit below this line
module.exports = palindromes;