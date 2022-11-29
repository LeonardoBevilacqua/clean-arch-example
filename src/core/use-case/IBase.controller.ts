import { HttpRequest } from "../presentation/contract";
import { HttpResponseOutput } from "../presentation/contract/Response.http";

export interface BaseControllerInterface {
    handle(request: HttpRequest): Promise<HttpResponseOutput>
}