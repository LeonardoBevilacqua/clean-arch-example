import { HttpResponseOutput } from "../../../../../presentation/contract";

export class ServerlessResponseAdapter {
    static adapt(httpResponse: HttpResponseOutput) {
        return {
            ...httpResponse,
            body: httpResponse.body ? JSON.stringify(httpResponse.body) : "",
        }
    }
}