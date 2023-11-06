{
  // constraints

  // Declaring student type to prevent passing wrong information to the function:

  interface Student {
    id: number;
    name: string;
    email: string;
  }

  // Forcing/constraining data types by using extends to make sure always pass the correct data types;

  const addCourseToStudent = <T extends Student>(student: T): T => {
    const courses = ["Angular", "VUE JS", "Laravel", "Python", "JavaScript"];
    return {
      ...student,
      courses,
    };
  };

  const student1 = addCourseToStudent({
    id: 2,
    name: "Mr. Akhtar",
    email: "akhtar@gmail.com",
    devType: "Next Level Web Developer",
  });

  const student2 = addCourseToStudent({
    id: 3,
    name: "Mr. Hussain",
    email: "hussain@gmail.com",
    hasWatch: "Apple Watch",
  });

  // Now it will show error for passing wrong information to the function:
  const student3 = addCourseToStudent({ wrong: "Wrong" });

  // Type constraints
}
