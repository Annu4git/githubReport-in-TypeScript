import { Repo } from "./Repo";


export class User {
    login : string;
    fullName : string;
    repoCount : number;
    followerCount : number;
    repos? : Repo[];            
    // question mark means optional

    constructor(userObj : any) {
        this.login = userObj.login;
        this.fullName = userObj.name;
        this.repoCount = userObj.public_repos;
        this.followerCount = userObj.followers;
    }
}