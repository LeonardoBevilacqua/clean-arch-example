import { Todo } from "./Todo.entity";

export interface TodoRepositoryInterface {
    insert(todo: Todo): Promise<void>;
    findAll(): Promise<Todo[]>;
    findById(id: number): Promise<Todo | undefined>;
    delete(id: number): Promise<void>;
}