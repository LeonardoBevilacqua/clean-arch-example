import { Router } from "express";
import { Request, Response } from "express";
import { CreateTodoUseCase, GetTodoByIdUseCase, ListAllTodosUseCase } from "../../../use-case";
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
        res.sendStatus(404);
    }
});

export { todoController }

