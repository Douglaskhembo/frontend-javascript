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