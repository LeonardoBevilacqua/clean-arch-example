import { Response } from "express";
import { HttpResponseOutput } from "../contract/Response.http";

export class ExpressResponseAdapter {
    static adapt(response: Response, httpResponse: HttpResponseOutput) {
        response
            .status(httpResponse.statusCode)
            .set(httpResponse.headers)
            .send(httpResponse.body ?? "");
    }
}