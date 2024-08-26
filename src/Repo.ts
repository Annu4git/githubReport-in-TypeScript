export class Repo {
    name : string;
    description : string;
    url : string;
    size : number;
    forkCount : number;

    constructor(repoObj : any) {
        this.name = repoObj.name;
        this.description = repoObj.description;
        this.url = repoObj.html_url;
        this.size = repoObj.size;
        this.forkCount = repoObj.forks_count;
    }
}