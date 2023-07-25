import { PLATFORM } from "aurelia-framework";
export class App {
  //  configure the router using configureRouter(config, router) method
  configureRouter(config, router) {
    this.router = router;
    config.title = "Router test";
    config.map([
      {
        route: ["", "userList"],
        moduleId: PLATFORM.moduleName("./users/userList"),
        name: "users",
        title: "UsersList",
        nav: true,
      },
      {
        route: "about",
        moduleId: PLATFORM.moduleName("./about/about"),
        name: "about",
        title: "About",
        nav: true,
      },
    ]);
  }
}

// import { inject } from "aurelia-framework";
// import { UserList } from "./users/userList";

// @inject(UserList)
// export class App {
//   constructor(userList) {
//     this.message = "";
//     this.change = true;
//     this.userList = userList;
//   }

//   // static inject() {
//   //   return [HttpClient];
//   // }

//   activate() {
//     this.message = "Hello from aurelia!";
//     return this.userList.getAll().then((users) => (this.users = users));
//     // this.getMoviesData();
//     // return this.httpClient
//     //   .get("https://jsonplaceholder.typicode.com/users")
//     //   .then((response) => {
//     //     console.log(response.content);
//     //     return (this.users = response.content);
//     //   })
//     //   .catch((err) => console.log(err.message));
//   }

//   // getMoviesData() {
//   //   //making an http get request
//   //   this.http
//   //     .get("./api/movie.json")
//   //     .then((res) => {
//   //       if (res.isSuccess) {
//   //         this.movies = res.content;
//   //       } else {
//   //         console.error("http error #######");
//   //       }
//   //     })
//   //     .catch((err) => {
//   //       console.error(err.message);
//   //     });
//   // }

//   // changeMessage() {
//   //   console.log("**********changeMessage is clicked**********");
//   //   this.change = !this.change;
//   //   if (this.change) {
//   //     this.message = "Hello from aurelia!";
//   //   } else {
//   //     this.message = "Good bye Aurelia";
//   //   }
//   // }
// }
