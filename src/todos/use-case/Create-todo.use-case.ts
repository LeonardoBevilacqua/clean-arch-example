import { TodoRepositoryInterface } from "../domain/ITodo.repository";
import { Todo } from "../domain/Todo.entity";
import { CreateTodoInput, CreateTodoOutput } from "../presentation";

export class CreateTodoUseCase {
    constructor(private todoRepo: TodoRepositoryInterface) { }

    async execute(input: CreateTodoInput): Promise<CreateTodoOutput> {
        const todo = Todo.create(input);
        await this.todoRepo.insert(todo);
        return todo.toJSON();
    }
}