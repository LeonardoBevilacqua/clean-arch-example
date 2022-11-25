import { TodoRepositoryInterface } from "../../domain/ITodo.repository";
import { Todo } from "../../domain/Todo.entity";

export class TodoInMemoryRepository implements TodoRepositoryInterface {
    items: Todo[] = [];

    async insert(todo: Todo): Promise<void> {
        this.items.push(todo);
    }

    async findAll(): Promise<Todo[]> {
        return this.items;
    }

    async findById(id: number): Promise<Todo | undefined> {
        return this.items.find(item => item.id === id);
    }
}