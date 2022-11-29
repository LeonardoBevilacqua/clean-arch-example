import { Request, Response, Router } from "express";
import { NotFoundError } from "../../../../core/errors";
import { ExpressRequestAdapter, ExpressResponseAdapter } from "../../../../core/presentation/adapters";
import { CreateTodoUseCase, DeleteTodoByIdUseCase, fabricateCreateTodoController, GetTodoByIdUseCase, ListAllTodosUseCase, ToggleReminderUseCase } from "../../../use-case";
import { TodoInMemoryRepository } from "../../in-memory/Todo-in-memory.repository";

const todoRepo = TodoInMemoryRepository.Instance;
const todoController = Router()

todoController.post('/', async (req: Request, res: Response) => {
    const httpRequest = ExpressRequestAdapter.adapt(req)
    const controller = fabricateCreateTodoController();
    const result = await controller.handle(httpRequest);
    ExpressResponseAdapter.adapt(res, result);
});

todoController.get('/', async (_req: Request, res: Response) => {
    const listAllUseCase = new ListAllTodosUseCase(todoRepo);
    const output = await listAllUseCase.execute();
    res.json(output);
});

todoController.get('/:id', async (req: Request, res: Response) => {
    const getByIdUseCase = new GetTodoByIdUseCase(todoRepo);
    try {
        const output = await getByIdUseCase.execute(Number(req.params.id));
        res.json(output);
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(error.code).send({
                name: error.name,
                code: error.code,
                message: error.message
            });
        } else {
            res.status(500).send('Unkown error');
        }
    }
});

todoController.delete('/:id', async (req: Request, res: Response) => {
    const deleteByIdUseCase = new DeleteTodoByIdUseCase(todoRepo);
    await deleteByIdUseCase.execute(Number(req.params.id));

    res.sendStatus(200);
})

todoController.patch('/:id/reminder/:reminder', async (req: Request, res: Response) => {
    const toggleReminderUseCase = new ToggleReminderUseCase(todoRepo);
    try {
        const output = await toggleReminderUseCase.execute(Number(req.params.id), JSON.parse(req.params.reminder));
        res.json(output);
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(error.code).send({
                name: error.name,
                code: error.code,
                message: error.message
            });
        } else {
            res.status(500).send('Unkown error');
        }
    }
})

export { todoController };

