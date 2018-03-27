// Setup constructor to take name and age (default 0)
// getDescription - Andrew Mead is 26 year(s) old.

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description = description + ` Their Major is ${this.major}.`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name,age, homeLocation) {
        super(name);
        this.location = homeLocation;
    }
    getDescription() {
        let greeting = super.getGreeting();

        if (this.location) {
            greeting = greeting + ` I'm visiting from ${this.location}`
        }
        return greeting;
    }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Andrew Mead. I'm visiting from Vancouver.
// 2. Hi. I am Andrew Mead.

const me = new Traveler("Andy",26, "Vancouver");
console.log(me.getDescription());