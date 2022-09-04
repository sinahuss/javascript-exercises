const findTheOldest = function(people) {
    const oldest = people.reduce((oldest, nextOne) => {
        const oldestDeath = 'yearOfDeath' in oldest ? oldest.yearOfDeath : (new Date()).getFullYear();
        const nextDeath = 'yearOfDeath' in nextOne ? nextOne.yearOfDeath : (new Date()).getFullYear();
        return oldestDeath - oldest.yearOfBirth < nextDeath - nextOne.yearOfBirth
        ? nextOne : oldest;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
