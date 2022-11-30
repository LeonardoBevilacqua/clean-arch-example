import { Todo } from "./Todo.entity";

export interface TodoRepositoryInterface {
    insert(todo: Todo): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    findById(id: number): Promise<Todo | undefined>;
    delete(id: number): Promise<void>;
    update(todo: Todo): Promise<void>;
}