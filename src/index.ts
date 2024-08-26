import { GithubApiService } from "./GithubApiService";
import { Repo } from "./Repo";
import { User } from "./User";

console.log("hello");

var service = new GithubApiService();
service.getUserInfo("annu4git", (user : User) => {
    console.log(user);
});

service.getRepos("annu4git", (repos : Repo[]) => {
    console.log(repos.length);
    for(let i = 0; i < repos.length; i++) {
        console.log(repos[i].name);
    }
});


