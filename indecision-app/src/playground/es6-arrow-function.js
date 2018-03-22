// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

const getFirstName = (name) => {
    return name.split(" ")[0];
}

const getFirstName1 = (name) => name.split(" ")[0];

console.log(getFirstName("Mike Smith"))
console.log(getFirstName1("John Doe"))

