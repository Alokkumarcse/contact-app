import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";
import { HttpClient } from "aurelia-http-client";

let baseUrl = "https://jsonplaceholder.typicode.com/users";

@inject(Router, HttpClient)
export class Details {
  constructor(router, httpClient) {
    this.router = router;
    this.http = httpClient;
    this.user = null;
    this.message = "details Page";
  }

  activate(params) {
    const userId = params.id; // Get the user ID from the route parameters
    this.getDetails(userId); // Fetch the user data based on the ID
  }

  getDetails(userId) {
    const url = `${baseUrl}/${userId}`;
    return this.http.get(url).then((res) => {
      this.user = res.content;
      console.log(this.user);
      return this.user;
    });
  }

  goBack() {
    // This will navigate back to the previous page in the browser's history.
    this.router.navigateBack();
  }
}
