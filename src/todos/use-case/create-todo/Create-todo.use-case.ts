import { TodoRepositoryInterface } from "../../domain/ITodo.repository";
import { Todo } from "../../domain/Todo.entity";
import { TodoInMemoryRepository } from "../../infra/db";
import { CreateTodoInput, CreateTodoOutput } from "../../presentation";

export class CreateTodoUseCase {
    constructor(private todoRepo: TodoRepositoryInterface) { }

    async execute(input: CreateTodoInput): Promise<CreateTodoOutput> {
        const todo = Todo.create(input, this.todoRepo instanceof TodoInMemoryRepository ? Math.floor(Math.random() * 100) : undefined);
        const createdTodo = await this.todoRepo.insert(todo);
        return createdTodo.toJSON();
    }
}