import { GithubApiService } from "./GithubApiService";
import { User } from "./User";

console.log("hello");

var service = new GithubApiService();
var user = service.getUserInfo("annu4git", (user : User) => {
    console.log(user);
});
