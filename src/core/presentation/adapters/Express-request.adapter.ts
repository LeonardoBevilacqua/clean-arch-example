import { Request } from "express";
import { HttpRequest } from "../contract";

export class ExpressRequestAdapter {
    static adapt(request: Request) {
        const { params, body, headers, query } = request;

        return new HttpRequest(params, body, headers, query);
    }
}