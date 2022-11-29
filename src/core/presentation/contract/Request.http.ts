export class HttpRequest {
    params: any;
    body: any;
    headers: any;
    query: any;

    constructor(params: any, body: any, headers: any, query: any) {
        this.params = params;
        this.headers = headers;
        this.query = query;

        try {
            this.body = JSON.parse(body);
        } catch (error) {
            this.body = body;
        }
    }
}