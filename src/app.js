import { inject } from "aurelia-framework";
import { UserData } from "./api/userData";

@inject(UserData)
export class App {
  constructor(userData) {
    this.message = "";
    this.userData = userData;
  }

  // static inject() {
  //   return [HttpClient];
  // }

  activate() {
    this.message = "Hello from aurelia!";
    return this.userData.getAll().then((users) => (this.users = users));
    // this.getMoviesData();
    // return this.httpClient
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     console.log(response.content);
    //     return (this.users = response.content);
    //   })
    //   .catch((err) => console.log(err.message));
  }

  // getMoviesData() {
  //   //making an http get request
  //   this.http
  //     .get("./api/movie.json")
  //     .then((res) => {
  //       if (res.isSuccess) {
  //         this.movies = res.content;
  //       } else {
  //         console.error("http error #######");
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err.message);
  //     });
  // }

  changeMessage() {
    console.log("**********changeMessage is clicked**********");
    this.message = "Good bye Aurelia";
  }
}
