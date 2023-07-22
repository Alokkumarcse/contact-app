export class App {
  constructor() {
    this.message = "";
  }

  activate() {
    this.message = "Hello from aurelia!";
  }

  changeMessage() {
    console.log("changeMessage is clicked #############");
    this.message = "Good bye Aurelia";
  }
}
