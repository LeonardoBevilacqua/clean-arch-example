import { Todo } from "./Todo.entity";

export interface TodoRepositoryInterface {
    insert(todo: Todo): Promise<void>;
    findAll(): Promise<Todo[]>;
}