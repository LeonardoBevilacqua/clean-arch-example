import { Router } from "express";
import { Request, Response } from "express";
import { NotFoundError } from "../../../../errors";
import { CreateTodoUseCase, DeleteTodoByIdUseCase, GetTodoByIdUseCase, ListAllTodosUseCase } from "../../../use-case";
import { TodoInMemoryRepository } from "../../in-memory/Todo-in-memory.repository";

const todoRepo = new TodoInMemoryRepository();
const todoController = Router()

todoController.post('/', async (req: Request, res: Response) => {
    const createUseCase = new CreateTodoUseCase(todoRepo);
    const output = await createUseCase.execute(req.body);
    res.status(201).json(output);
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

export { todoController }

