import { APIGatewayProxyEvent } from "aws-lambda";
import { ServerlessRequestAdapter, ServerlessResponseAdapter } from "src/presentation/adapters";
import { fabricateCreateTodoController, fabricateDeleteTodoByIdController, fabricateGetTodoByIdController, fabricateListAllTodosController, fabricateToggleReminderController } from "@root/todos/use-case";

export const create = async (event: APIGatewayProxyEvent) => {
    const lambdaRequest = ServerlessRequestAdapter.adapt(event);
    const controller = await fabricateCreateTodoController();
    const result = await controller.handle(lambdaRequest);
    return ServerlessResponseAdapter.adapt(result);
}

export const getAll = async (event: APIGatewayProxyEvent) => {
    const lambdaRequest = ServerlessRequestAdapter.adapt(event);
    const controller = await fabricateListAllTodosController();
    const result = await controller.handle(lambdaRequest);
    return ServerlessResponseAdapter.adapt(result);
}

export const getById = async (event: APIGatewayProxyEvent) => {
    const lambdaRequest = ServerlessRequestAdapter.adapt(event);
    const controller = await fabricateGetTodoByIdController();
    const result = await controller.handle(lambdaRequest);
    return ServerlessResponseAdapter.adapt(result);
}

export const deleteById = async (event: APIGatewayProxyEvent) => {
    const lambdaRequest = ServerlessRequestAdapter.adapt(event);
    const controller = await fabricateDeleteTodoByIdController();
    const result = await controller.handle(lambdaRequest);
    return ServerlessResponseAdapter.adapt(result);
}

export const toggleReminder = async (event: APIGatewayProxyEvent) => {
    const lambdaRequest = ServerlessRequestAdapter.adapt(event);
    const controller = await fabricateToggleReminderController();
    const result = await controller.handle(lambdaRequest);
    return ServerlessResponseAdapter.adapt(result);
}