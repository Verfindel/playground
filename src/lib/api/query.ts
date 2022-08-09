export class Query {
    method : string = "";
    headers : {[key: string] : string} = {};
    body : string = "";
    constructor(method: string) {
        this.method = method;
    }
}