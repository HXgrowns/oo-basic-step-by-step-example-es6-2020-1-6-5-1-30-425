class Class {
  constructor(number) {
    this.number = number;
  }

  assignLeader(student) {
    if(this.number !== student.klass.number) {
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
}

module.exports = Class;