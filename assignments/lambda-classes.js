// CODE here for your Lambda Classes

class Person{
  constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }
  speak(){
    console.log( `Hello my name is ${this.name}, I am from ${this.location}!`);
  }
}
class Instructor extends Person{
  constructor(props){
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject){
    console.log( `Today we are learning about ${subject}`);
  }
  grade(students, subject) {
     console.log( `${students.name} recieves a perfect score on ${subject}`);
  }
}
  class Student extends Instructor{
    constructor(props){
      super(props);
      this.previousBackground = props.previousBackground;
      this.className = props.className;
      this.favSubjects = props.favSubjects;
    }
    listsSubjects(){
       console.log( `My favorite subject is ${this.favSubjects}`);
    }
    PRAssignment(subject){
      console.log( `${this.name} has submitted  a PR for ${subject} `);
    }
    sprintChallenge(subject){
      console.log( `${this.name} has begun sprint challenge on ${subject}`);
    }
  }

  class ProjectManager extends Instructor{
    constructor(props){
   super(props);
   this.gradClassName = props.gradClassName;
   this.favInstructor = props.favInstructor;
    }
    standUp(channel){
      console.log( `${this.name} announces ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
      console.log( `${this.name} debugs ${student.name}'s code on ${subject}`);
    }
  }

  //Test
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const freddy = new Student({
  name: 'Freddy',
  location: 'Bedraock',
  age: 37,
  previousBackground: "None",
  className: "Web23FT",
  favSubjects: ["JS", "MAth"]
});

const fredrick = new ProjectManager({
  name: 'Fredrick',
  location: 'Bedasdasdasdasdrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget to`,
  gradClassName: "idk",
  favInstructor: "idk"
});

fred.demo("Math");
fred.grade(freddy, "Math");

freddy.listsSubjects();
freddy.PRAssignment("Math");
freddy.sprintChallenge("Math");

fredrick.standUp("CoolSlackChannel");
fredrick.debugsCode(freddy, "Math");


