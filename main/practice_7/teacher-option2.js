import Person from "../../main/practice_7/person.js";

class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return `${super.introduce()} I am a Teacher. I teach ${this.klass ? 'Class ' + this.klass.number : 'No Class'}.`;
  }

  introduceWith(studentJerry) {
    if(studentJerry.klass.number === this.klass.number) {
      return `${super.introduce()} I am a Teacher. I teach ${studentJerry.name}.`;
    }
    return `${super.introduce()} I am a Teacher. I don't teach ${studentJerry.name}.`;
  }
}

module.exports = Teacher;
