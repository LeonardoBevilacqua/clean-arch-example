import { NotFoundError } from "../../errors";

export type HttpResponseOutput = {
    statusCode: number;
    body: Object,
    headers: Object
}

let allowCors = {};
if (process.env.ENVIRONMENT_NAME == "local") {
    allowCors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
    };
}

export class HttpResponse {

    // 200
    static ok(data: any): HttpResponseOutput {
        return {
            statusCode: 200,
            body: data,
            headers: Object.assign(
                {
                    "Content-Type": "application/json",
                },
                allowCors
            ),
        };
    }

    // 201
    static created(data: any): HttpResponseOutput {
        return {
            statusCode: 201,
            body: data,
            headers: Object.assign(
                {
                    "Content-Type": "application/json",
                },
                allowCors
            ),
        };
    }

    // 204
    static noContent(): HttpResponseOutput {
        return {
            statusCode: 204,
            body: "no content",
            headers: Object.assign(
                {
                    "Content-Type": "application/json",
                },
                allowCors
            ),
        };
    }

    // 400
    static badRequest(error: any): HttpResponseOutput {
        return {
            statusCode: 400,
            body: { error: error },
            headers: Object.assign(
                {
                    "Content-Type": "application/json",
                },
                allowCors
            ),
        };
    }

    // 403
    static forbidden(data: any): HttpResponseOutput {
        return {
            statusCode: 403,
            body: data,
            headers: Object.assign(
                {
                    "Content-Type": "application/json",
                },
                allowCors
            ),
        };
    }

    // 404
    static notFound(error: NotFoundError): HttpResponseOutput {
        return {
            statusCode: 404,
            body: {
                name: error.name,
                code: error.code,
                message: error.message
            },
            headers: Object.assign(
                {
                    "Content-Type": "application/json",
                },
                allowCors
            ),
        };
    }

    // 409
    static conflict(error: any): HttpResponseOutput {
        return {
            statusCode: 409,
            body: { message: error.message },
            headers: Object.assign(
                {
                    "Content-Type": "application/json",
                },
                allowCors
            ),
        };
    }

    // 500
    static serverError(error: any): HttpResponseOutput {
        return {
            statusCode: 500,
            body: { message: error.message },
            headers: Object.assign(
                {
                    "Content-Type": "application/json",
                },
                allowCors
            ),
        };
    }
}