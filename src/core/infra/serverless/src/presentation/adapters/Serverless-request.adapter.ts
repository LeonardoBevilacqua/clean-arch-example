import { APIGatewayProxyEvent } from "aws-lambda";
import { HttpRequest } from "../../../../../presentation/contract";

export class ServerlessRequestAdapter {
    static adapt(event: APIGatewayProxyEvent) {
        const { pathParameters, body, headers, queryStringParameters } = event;

        return new HttpRequest(pathParameters, body, headers, queryStringParameters);
    }
}