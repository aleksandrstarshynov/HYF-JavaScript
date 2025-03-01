import { modules, students, mentors, classes } from "./hyf.js";

const getPeopleOfClass = (className) => {
  const classData = classes.find(classItem => classItem.name === className);
  return [...mentors, ...students]
    .filter(user => user.class === className || user.nowTeaching === classData.currentModule)
    .map(user => ({
      name: user.name,
      role: user.canTeach ? 'mentor' : 'student'
    }));
};

console.log(getPeopleOfClass('class34'));

const getActiveClasses = () => classes
  .filter(classItem => classItem.active)
  .reduce((obj, classItem) => ({
    ...obj,
    [classItem.name]: getPeopleOfClass(classItem.name)
  }), {});

console.log(getActiveClasses());
