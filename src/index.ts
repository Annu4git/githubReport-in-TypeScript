import { GithubApiService } from "./GithubApiService";
import { Repo } from "./Repo";
import { User } from "./User";
import * as _ from 'lodash';

console.log("hello");

// const USERNAME = "annu4git";
const USERNAME = "koushikkothagal";

var service = new GithubApiService();
service.getUserInfo(USERNAME, (user : User) => {
    service.getRepos(USERNAME, (repos : Repo[]) => {
        console.log(" Total repos : " + repos.length);
        let sortedRepos = _.sortBy(repos, [function(repo) { return repo.forkCount * -1; }]);
        let filteredRepos = _.take(sortedRepos, 5);
        user.repos = filteredRepos;
        console.log(user);
    });
});




