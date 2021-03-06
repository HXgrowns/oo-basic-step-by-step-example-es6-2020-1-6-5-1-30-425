const Person = require("../../main/practice_9/person.js")

class Student extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }
  introduce() {
    return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
  }
}

module.exports = Student;

