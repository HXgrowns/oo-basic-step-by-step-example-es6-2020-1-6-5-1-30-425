const Person = require("../../main/practice_10/person.js");
const Class = require("../../main/practice_10/class.js");

class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }

  introduce() {
    if (this.klasses && this.klasses.length > 0) {
      return `${super.introduce()} I am a Teacher. I teach Class ${Class.toString(this.klasses)}.`;
    }
    return `${super.introduce()} I am a Teacher. I teach No Class.`;
  }

  isTeaching(student) {
    this.klasses.forEach((klass) => {
      if (klass.isIn(student)) {
        return true;
      }
    });
    return false;
  }
}

module.exports = Teacher;
