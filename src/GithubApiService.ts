import * as request from 'request';
import { User } from './User';

export class GithubApiService {

    getUserInfo(userName : string) {
        let options : any = {
            headers : {
                'User-Agent' : 'request'
            },
            json : true
        }

        request.get('https://api.github.com/users/' + userName, options, (error, response, body) => {
            // var user = new User(JSON.parse(body));
            var user = new User(body);
            console.log(user);
            return user;
        })
    }

    getRepos() {

    }
}