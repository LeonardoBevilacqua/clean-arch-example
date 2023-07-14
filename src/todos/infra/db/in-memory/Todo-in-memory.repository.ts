import { TodoRepositoryInterface } from "../../../domain/ITodo.repository";
import { Todo } from "../../../domain/Todo.entity";

export class TodoInMemoryRepository implements TodoRepositoryInterface {
    private static _instance: TodoInMemoryRepository;
    items: Todo[] = [];

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    async insert(todo: Todo): Promise<Todo> {
        this.items.push(todo);
        return todo;
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