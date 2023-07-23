export class currentDate {
  constructor() {
    this.message = "Hello from aurelia!";
    this.change = true;
    this.date = new Date().toDateString();
  }

  changeMessage() {
    console.log("**********changeMessage is clicked**********");
    this.change = !this.change;
    if (this.change) {
      this.message = "Hello from aurelia!";
    } else {
      this.message = "Good bye Aurelia";
    }
  }
}
