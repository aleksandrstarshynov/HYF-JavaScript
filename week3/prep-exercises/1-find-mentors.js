import { modules, students, mentors, classes } from "./hyf.js";

const possibleMentorsForModule = (moduleName) => {
  return mentors
  .filter(({ canTeach }) => canTeach.includes(moduleName))
  .map(({ name }) => name);

console.log(possibleMentorsForModule('using-apis'));
console.log(possibleMentorsForModule('javascript'));
};

const findMentorForModule = (moduleName) => {
  const availableMentors = possibleMentorsForModule(moduleName);
  if (availableMentors.length > 0) {
    const randomMentor = availableMentors[Math.floor(Math.random() * availableMentors.length)];
    const mentor = mentors.find(mentor => mentor.name === randomMentor);
    return `${mentor.name} was chosen for you`;
  } else {
    console.log('No available mentor for this module');
  }
};

console.log(findMentorForModule('javascript'));
