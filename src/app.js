import { HttpClient } from "aurelia-http-client";
export class App {
  constructor() {
    this.message = "";
    this.httpClient = new HttpClient();
  }

  activate() {
    this.message = "Hello from aurelia!";
    // this.getMoviesData();
    return this.httpClient
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.content);
        return (this.users = response.content);
      })
      .catch((err) => console.log(err.message));
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
    console.log("changeMessage is clicked #############");
    this.message = "Good bye Aurelia";
  }
}
