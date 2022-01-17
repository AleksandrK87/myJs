const student = {
name: 'Ivan',
surname: 'Ivanov',
isMale: 'Male',
contact: 'ivan1234@gmail.com',
}

console.log(student);
console.log(student.contact);

student.isMale = 'female';

console.log(student);

const znu = {
    department: 'Кафедра психологии',
    faculty: 'Социальной педагогики и психологии',
}

console.log(znu);

znu.faculty = 'Математический';
console.log(znu);

function Book(author, title, yearOfPublication, publisher) {
    this.author = author;
    this.title = title;
    this.yearOfPublication = yearOfPublication;
    this.publisher = publisher;
}

