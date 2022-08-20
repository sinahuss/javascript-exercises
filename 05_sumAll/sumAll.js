const sumAll = function(start, end) {
    if(typeof start != 'number' || typeof end != 'number') return 'ERROR';
    if(start < 0 || end < 0) return 'ERROR';
    if (start > end) {
        let temp = end;
        end = start;
        start = temp;
    }
    let ans = 0;
    for(i=start;i<=end;i++) {
        ans += i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
