class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }

  class Manager extends Employee {
    constructor(name, salary, hireDate, descriptionOfJob){
    super(name, salary, hireDate)
    }
    jobDescription(){
        console.log(this.name + " " + this.hireDate + " " + this.salary+ " "+ this.descriptionOfJob);
    }

  }


  class Designer extends Employee {
      constructor(name, salary, hireDate, expereince){
          super(name, salary, hireDate)
      }



    yearsExperience(){
        console.log(this.name + " " + this.hireDate + " " + this.salary+ " "+ this.experience);
    }



    }

  class SalesAssociate extends Employee {
    constructor(name, salary, hireDate, degrees){
        super(name, salary, hireDate)
    }
    
    
    degreeCompleted(){
        console.log(this.name + " " + this.hireDate + " " + this.salary+ " "+ this.degrees);
    }


  }

  let Johnny = new Manager ("John", "60,000", "9-24-18", "Managing people");
  let Melissa = new Designer ("Melissa", "50,000","9-13-2014", "worked at Apple");
  let Brandon = new SalesAssociate("Brad", "40,000","10-12-2017", "Bachelors Degree");

  Johnny.jobDescription();
  Melissa.yearsExperience();
  Brandon.degreeCompleted();

