import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-http-client";

let baseUrl = "https://jsonplaceholder.typicode.com/users";

@inject(HttpClient)
export class UserData {
  constructor(httpClient) {
    this.http = httpClient;
  }

  getAll() {
    return this.http.get(baseUrl).then((res) => {
      console.log(res.content);
      this.users = res.content;
      console.log(this.users);
      return this.users;
    });
  }
}
