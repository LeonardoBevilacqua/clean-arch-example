import { APIGatewayProxyEvent } from "aws-lambda";
import { ServerlessRequestAdapter, ServerlessResponseAdapter } from "src/presentation/adapters";
import { fabricateCreateTodoController, fabricateDeleteTodoByIdController, fabricateGetTodoByIdController, fabricateListAllTodosController, fabricateToggleReminderController } from "@root/todos/use-case";

export const create = async (event: APIGatewayProxyEvent) => {
    const lambdaRequest = ServerlessRequestAdapter.adapt(event);
    const controller = fabricateCreateTodoController();
    const result = await controller.handle(lambdaRequest);
    return ServerlessResponseAdapter.adapt(result);
}

export const getAll = async (event: APIGatewayProxyEvent) => {
    const lambdaRequest = ServerlessRequestAdapter.adapt(event);
    const controller = fabricateListAllTodosController();
    const result = await controller.handle(lambdaRequest);
    return ServerlessResponseAdapter.adapt(result);
}

export const getById = async (event: APIGatewayProxyEvent) => {
    const lambdaRequest = ServerlessRequestAdapter.adapt(event);
    const controller = fabricateGetTodoByIdController();
    const result = await controller.handle(lambdaRequest);
    return ServerlessResponseAdapter.adapt(result);
}

export const deleteById = async (event: APIGatewayProxyEvent) => {
    const lambdaRequest = ServerlessRequestAdapter.adapt(event);
    const controller = fabricateDeleteTodoByIdController();
    const result = await controller.handle(lambdaRequest);
    return ServerlessResponseAdapter.adapt(result);
}

export const toggleReminder = async (event: APIGatewayProxyEvent) => {
    const lambdaRequest = ServerlessRequestAdapter.adapt(event);
    const controller = fabricateToggleReminderController();
    const result = await controller.handle(lambdaRequest);
    return ServerlessResponseAdapter.adapt(result);
}