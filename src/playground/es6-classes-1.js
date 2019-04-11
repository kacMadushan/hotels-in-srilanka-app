class Person {
    constructor(name = 'Anonymouse', age = 18, address = 'Colombo') {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getGretting() {
        return 'Hi my name is ' + this.name + ' and i am ' + this.age + ' old.';
    }

    getAddress() {
        return 'My address is ' + this.address;
    }
}

class Student extends Person {
    constructor(name, age, address, major) {
        super(name, age, address);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getAddress() {
        let address = super.getAddress();

        if(this.hasMajor()){
            address += ` Their major is ${this.major}.`;
        }

        return address;
    }
}

class Traveler extends Person {
    constructor(name, age, address, homeLocation) {
        super(name, age, address);
        this.homeLocation = homeLocation;
    }
    getLocation() {
        return !!this.homeLocation;
    }
    getGretting() {
        let gretting = super.getGretting();

        if(this.getLocation()) {
            gretting += ` I m visiting form ${this.homeLocation}.`;
        }
        return gretting;
    }
}

const me = new Traveler('Chamika Madushan', 28, 'Horana', 'Colombo 05');
console.log(me.getGretting());

const other = new Traveler(undefined, undefined, undefined, 'Nowhere');
console.log(other.getGretting());