interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearOfExperience: number;
    location: string;
    [key: string]: any;
}

const Teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearOfExperience: 5,
    location: "New York",
    age: 30,
    contract: true,
};

console.log(Teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

const Director1: Directors = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: true,
    yearOfExperience: 10,
    location: "Los Angeles",
    numberOfReports: 5,
};
console.log(Director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));


export interface StudentConstructor {
  firstName: string;
  lastName: string;
}


export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}


export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
