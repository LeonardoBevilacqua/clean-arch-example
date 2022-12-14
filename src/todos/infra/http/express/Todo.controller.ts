import { Request, Response, Router } from "express";
import { ExpressRequestAdapter, ExpressResponseAdapter } from "../../../../core/presentation/adapters";
import {
    fabricateCreateTodoController,
    fabricateDeleteTodoByIdController,
    fabricateGetTodoByIdController,
    fabricateListAllTodosController,
    fabricateToggleReminderController
} from "../../../use-case";
import { TodoInMemoryRepository } from "../../in-memory/Todo-in-memory.repository";

const todoRepo = TodoInMemoryRepository.Instance;
const todoController = Router()

todoController.post('/', async (req: Request, res: Response) => {
    const httpRequest = ExpressRequestAdapter.adapt(req)
    const controller = fabricateCreateTodoController();
    const result = await controller.handle(httpRequest);
    ExpressResponseAdapter.adapt(res, result);
});

todoController.get('/', async (req: Request, res: Response) => {
    const httpRequest = ExpressRequestAdapter.adapt(req)
    const controller = fabricateListAllTodosController();
    const result = await controller.handle(httpRequest);
    ExpressResponseAdapter.adapt(res, result);
});

todoController.get('/:id', async (req: Request, res: Response) => {
    const httpRequest = ExpressRequestAdapter.adapt(req)
    const controller = fabricateGetTodoByIdController();
    const result = await controller.handle(httpRequest);
    ExpressResponseAdapter.adapt(res, result);
});

todoController.delete('/:id', async (req: Request, res: Response) => {
    const httpRequest = ExpressRequestAdapter.adapt(req)
    const controller = fabricateDeleteTodoByIdController();
    const result = await controller.handle(httpRequest);
    ExpressResponseAdapter.adapt(res, result);
})

todoController.patch('/:id/reminder/:reminder', async (req: Request, res: Response) => {
    const httpRequest = ExpressRequestAdapter.adapt(req)
    const controller = fabricateToggleReminderController();
    const result = await controller.handle(httpRequest);
    ExpressResponseAdapter.adapt(res, result);
})

export { todoController };

