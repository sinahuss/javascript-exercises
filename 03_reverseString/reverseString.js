const reverseString = function(string) {
    var ans = '';
    for(i=0;i<string.length;i++) {
        ans += string[string.length-1-i];
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
