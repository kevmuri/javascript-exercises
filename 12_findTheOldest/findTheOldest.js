const findTheOldest = function(people) {
    //add age to each person
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < people.length; i++) {
        if (people[i].hasOwnProperty("yearOfDeath")) {
            people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        else {
            people[i].age = currentYear - people[i].yearOfBirth;
        }
    }
    
    let oldestPerson = people[0];
    for (let i = 0; i < people.length; i++) {
        if (oldestPerson.age < people[i].age) {
            oldestPerson = people[i];
        }
    }

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
