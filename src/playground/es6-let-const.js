var nameVar = 'Max';
nameVar = 'Chamika';
console.log('nameVar', nameVar);

let nameLet = 'Billy';
nameLet = 'Vox';
console.log('nameLet', nameLet);

const nameConst = 'Milk';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = 'Chamika Madushan';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);