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

    async delete(id: number): Promise<void> {
        this.items = this.items.filter(item => item.id !== id);
    }

    async update(todo: Todo): Promise<void> {
        this.items.map(currentTodo => currentTodo.id === todo.id ? todo : currentTodo);
    }
}