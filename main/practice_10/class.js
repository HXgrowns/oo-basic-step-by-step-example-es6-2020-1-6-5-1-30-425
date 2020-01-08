class Class {
  constructor(number) {
    this.number = number;
  }

  isIn(student) {
    return this.number === student.klass.number;
  }

  assignLeader(student) {    
    if(!this.isIn(student)) {
      console.log("It is not one of us.");
    } else {
      this.leader = student;
      student.introduce = () => `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am Leader of Class ${student.klass.number}.`;
    }
  }

  appendMember(student) {
    student.klass = this;
  }

  getDisplayName() {
    return `Class ${this.number}`;
  }

  static toString(klasses) {
    let numbers = [];
    klasses.forEach((klass) => {
      numbers.push(klass.number);
    });

    return numbers.toString().replace(",", ", ");
  }
}

module.exports = Class;