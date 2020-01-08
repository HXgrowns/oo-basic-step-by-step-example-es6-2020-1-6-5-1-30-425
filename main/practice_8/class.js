class Class {
  constructor(number) {
    this.number = number;
  }

  assignLeader(student) {
    if (student.klass.number === this.number) {
      this.leader = student;
      student.introduce = () => `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am Leader of Class ${student.klass.number}.`;
    }
  }

  getDisplayName() {
    return `Class ${this.number}`;
  }
}

module.exports = Class;