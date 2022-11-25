import { TodoRepositoryInterface } from "../../domain/ITodo.repository";
import { CreateTodoOutput } from "../../presentation";

export class ListAllTodosUseCase {
    constructor(private todoRepo: TodoRepositoryInterface) { }

    async execute(): Promise<CreateTodoOutput[]> {
        const todos = await this.todoRepo.findAll();
        return todos.map(todo => todo.toJSON());
    }
}