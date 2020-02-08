const manager=require("manager");
const inquirer=require("inquirer"); 
const intern=require("../lib/intern");
const Engineer = require("../lib/Engineer");

const inquirer= require('inquirer'); 
 .prompt([
     "What is your github Username?"
 ])
.then(answers =>{ 
    "What is your profile?"
})
test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});




  class Engineer extends Engineer {
      name: ""; 
      age: ""; 
      group: "";
  }

  


