import { GithubApiService } from "./GithubApiService";
import { Repo } from "./Repo";
import { User } from "./User";
import * as _ from 'lodash';

console.log("hello");

// const USERNAME = "annu4git";
// const USERNAME = "koushikkothagal";

console.log(process.argv);

if(process.argv.length < 3) {
    console.log('Enter username in command line arguments');
} else {
    const USERNAME = process.argv[2];

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
}