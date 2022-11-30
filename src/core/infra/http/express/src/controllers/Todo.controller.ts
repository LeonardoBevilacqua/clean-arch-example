import { Request, Response, Router } from "express";
import {
    fabricateCreateTodoController,
    fabricateDeleteTodoByIdController,
    fabricateGetTodoByIdController,
    fabricateListAllTodosController,
    fabricateToggleReminderController
} from "../../../../../../todos/use-case";
import { ExpressRequestAdapter, ExpressResponseAdapter } from "../presentation/adapters";

const todoController = Router()

todoController.post('/', async (req: Request, res: Response) => {
    const httpRequest = ExpressRequestAdapter.adapt(req)
    const controller = await fabricateCreateTodoController();
    const result = await controller.handle(httpRequest);
    ExpressResponseAdapter.adapt(res, result);
});

todoController.get('/', async (req: Request, res: Response) => {
    const httpRequest = ExpressRequestAdapter.adapt(req)
    const controller = await fabricateListAllTodosController();
    const result = await controller.handle(httpRequest);
    ExpressResponseAdapter.adapt(res, result);
});

todoController.get('/:id', async (req: Request, res: Response) => {
    const httpRequest = ExpressRequestAdapter.adapt(req)
    const controller = await fabricateGetTodoByIdController();
    const result = await controller.handle(httpRequest);
    ExpressResponseAdapter.adapt(res, result);
});

todoController.delete('/:id', async (req: Request, res: Response) => {
    const httpRequest = ExpressRequestAdapter.adapt(req)
    const controller = await fabricateDeleteTodoByIdController();
    const result = await controller.handle(httpRequest);
    ExpressResponseAdapter.adapt(res, result);
})

todoController.patch('/:id/reminder/:reminder', async (req: Request, res: Response) => {
    const httpRequest = ExpressRequestAdapter.adapt(req)
    const controller = await fabricateToggleReminderController();
    const result = await controller.handle(httpRequest);
    ExpressResponseAdapter.adapt(res, result);
})

export { todoController };

