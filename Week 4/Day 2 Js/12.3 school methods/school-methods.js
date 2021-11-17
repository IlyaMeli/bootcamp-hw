const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson(type, idx) {
    return this[type].find((user) => {
      if (user.id === idx) {
        return user;
      }
    });
  },
  assignStudent(subject, idx) {
    return this.teachers.find((teacher) => {
      if (teacher.subjects.includes(subject)) {
        if (teacher.capacityLeft > 0) {
          teacher.students.push(this.findPerson("students", idx));
          teacher.capacityLeft--;
        } else {
          console.log("No capacity left");
        }
      }
    });
  },
  assignTeachersSubject(subject, idx) {
    let subjectArr = this.findPerson("teachers", idx).subjects;
    subjectArr.includes(subject)
      ? console.log(`the teacher allready teaches : ${subject}`)
      : subjectArr.push(subject);
  },
};
