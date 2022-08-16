export class Query {
    queryParams = new QueryParams();
    body : string = "";
    base : string = "";
    path : string = "";
}

class QueryParams {	
    method : string = "";
    headers : {[key: string] : string} = {};
}