import { Router } from "express";
import { Request, Response } from "express";
import { CreateTodoUseCase, ListAllTodosUseCase } from "../../../use-case";
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

export { todoController }

