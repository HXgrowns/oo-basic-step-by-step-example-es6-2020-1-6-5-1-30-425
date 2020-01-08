class Class {
  constructor(number) {
    this.number = number;
    this.joinTeachers = [];
    this.assinTeachers = [];
  }

  assignLeader(student) {    
    if(!this.isIn(student)) {
      console.log("It is not one of us.");
    } else {
      this.leader = student;
      student.introduce = () => `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am Leader of Class ${student.klass.number}.`;
      this.assinTeachers.forEach((teacher)=>{
        teacher.sayJoinLeader(this);
      })
    }
  }

  appendMember(student) {
    student.klass = this;

    this.joinTeachers.forEach((teacher)=>{
      teacher.sayJoinStudent(this);
    });
  }

  isIn(student) {
    return this.number === student.klass.number;
  }

  registerJoinListener(teacher) {
    this.joinTeachers.push(teacher);
  }

  registerAssignLeaderListener(teacher) {
    this.assinTeachers.push(teacher);
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