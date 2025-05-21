var Teacher3 = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearOfExperience: 5,
    location: "New York",
    age: 30,
    contract: true,
};
console.log(Teacher3);
var Director1 = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: true,
    yearOfExperience: 10,
    location: "Los Angeles",
    numberOfReports: 5,
};
console.log(Director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
console.log(printTeacher("John", "Doe"));
