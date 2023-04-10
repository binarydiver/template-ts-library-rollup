import Person from './person';

export const greeting = (person: Person): string => {
  const { firstName, lastName, age } = person;
  return `Greeting! ${firstName} ${lastName},\nYou are ${age} old.`;
};
