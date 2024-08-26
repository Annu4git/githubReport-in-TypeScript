import { GithubApiService } from "./GithubApiService";

console.log("hello");

var service = new GithubApiService();
var user = service.getUserInfo("annu4git");
