import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

const OPTIONS : any = {
    headers : {
        'User-Agent' : 'request'
    },
    json : true
}

export class GithubApiService {

    getUserInfo(userName : string, callbackFunction : (user : User) => any) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, (error, response, body) => {
            let user = new User(body);
            callbackFunction(user);
        })
    }

    getRepos(userName : string, callbackFunction : (repos : Repo[]) => any) {
        request.get('https://api.github.com/users/' + userName + "/repos", OPTIONS, (error, response, body) => {
            let repoArray = body;
            let repos : Repo[] = repoArray.map((repo : any) => new Repo(repo));
            callbackFunction(repos);
        })
    }
}