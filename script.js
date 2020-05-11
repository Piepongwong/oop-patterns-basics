document.addEventListener("load", function(){

 let $body = document.querySelector("body");
 let $button = $body.querySelector("button");
 $button.addEventListener("click", function(){
     alert("Hi");
 })

})

// Composition: Schools HAVE school classes
class School {
    constructor(schoolName, schoolLocation){
        this.name = schoolName;
        this.location = schoolLocation;
    }

    schoolClasses = [];
    addSchoolClass = function(schoolClass){
        this.schoolClasses.push(schoolClass);
    }

}

class SchoolClass {
    constructor(schoolClassType){
        this.type = schoolClassType;
    }
    students = [];
    addStudent = function(studentObject){
        this.students.push(studentObject);
    }
} 
let Ironhack = new School("Ironhack", "Amsterdam");
let Codaiseur = new School("Codaiseur", "Who cares?");

let schoolClass = new SchoolClass("web-dev");
schoolClass.addStudent(new Student({firstName: "Ana", lastName: "Durguz", favoriteSubject: "Javascript"}));

Ironhack.addSchoolClass(schoolClass);

// Inheritance: Students ARE Persons
class Person {
    constructor(firstName, lastName, height){
        this.firstName = firstName;
        this.lastName = lastName;
        this.height = height;
    }

    introduce = function(){
        console.log(`Hi, I am ${this.firstName} ${this.lastName}`);
    }
}

class Student extends Person {
    constructor(firstName, lastName, height, favoriteSubject) {
        super();
        this.favoriteSubject = favoriteSubject;
    }

    grades = [];

    study = function(){
        console.log("Studying real hard");
    }
}

let Elko = new Student("Elko", "Lemiso", 185, "Javascript");