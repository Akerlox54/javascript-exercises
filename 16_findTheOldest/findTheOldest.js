const findTheOldest = function(ppl) {
    const currentYear = new Date().getFullYear();
    let sortedByAge = ppl.sort((a, b) => {
        if ( a.yearOfDeath == undefined) {
            return -((currentYear - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth));
        }

        else if (b.yearOfDeath == undefined) {
            return -((a.yearOfDeath - a.yearOfBirth) - (currentYear - b.yearOfBirth));
        }

        else if (a.yearOfDeath == undefined && b.yearOfDeath == undefined) {
            return -((currentYear - a.yearOfBirth) - (currentYear - b.yearOfBirth));
        }
        
        else return -((a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth));
    });
    return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
