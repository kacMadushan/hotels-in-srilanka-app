const square = function(x) {
    return x * x;
}
console.log(square(8));

const squareArrow = (x) => {
    return x * x;
}
console.log(squareArrow(9));

const newArrow = (a,b) => a + b;
console.log(newArrow(10,30));

const getFullName = (firstName, lastName) => {
    const fullName = firstName + ' ' + lastName;
    return fullName;
};

console.log(getFullName('Harry', 'Potter'));

// Regular arrow function

// const getName = (myName) => {
//     return myName.split(' ')[0];
// };

// console.log(getName('Bob Wilsan'));

const getName = (myName) => myName.split(' ')[0];
console.log(getName('John Deo'));