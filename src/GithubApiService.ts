import * as request from 'request';
import { User } from './User';

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
            // console.log(user);
            callbackFunction(user);
        })
    }

    getRepos() {

    }
}