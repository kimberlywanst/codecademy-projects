// Parent School class
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }

    get name() {
      return this._name;
    }

    get level() {
      return this._level;
    }

    get numberOfStudents() {
      return this._numberOfStudents;
    }

    set numberOfStudents(num) {
      if (typeof numberOfStudents === number) {
        this._numberOfStudents = num;

      } else {
        console.log(`Invalid input: numberOfStudents must be set to a number.`);
      }
    }

    // Adding method to constructor
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }

    // Adding static method to constructor
    static pickSubstituteTeacher() {
      const substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
      const randomIndex = Math.floor(Math.random() * substituteTeachers.length - 1);
      return substituteTeachers[randomIndex];
    }
}

// Create child PrimarySchool class from parent
class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      // To use School parent constructor
      super(name, "primary", numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }

    // New getter for additional property
      get pickupPolicy() {
        return this._pickupPolicy;
      }
}

// Create child MiddleSchool class from parent
class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
      // To use School parent constructor
      super(name, "middle", numberOfStudents);
    }
}

// Create child HighSchool class from parent
class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      // To use School parent constructor
      super(name, "high", numberOfStudents);
      this._sportsTeams = sportsTeams;
    }

    // New getter for additional property
    get sportsTeams() {
      console.log(`Sports teams: ${this._sportsTeams}`);
    }
}

// Create a PrimarySchool instance
const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

// Static methods can only be called from Parent class
console.log(`Substitute teacher: ${School.pickSubstituteTeacher()} \n`);

// Create a HighSchool instance
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.quickFacts();
alSmith.sportsTeams;