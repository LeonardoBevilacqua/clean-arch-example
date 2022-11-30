import { SequelizeRepository } from "../../../../core/infra/db/sequelize/Sequelize.repository";
import { TodoRepositoryInterface } from "../../../domain/ITodo.repository";
import { Todo } from "../../../domain/Todo.entity";
import { TodoModel } from "./Todo.model";

export class TodoSequelizeRepository implements TodoRepositoryInterface {
    async insert(todo: Todo): Promise<Todo> {
        const result = await TodoModel.create(todo.toJSON());
        return Todo.create(result.dataValues, result.dataValues.id)
    }
    async findAll(): Promise<Todo[]> {
        const todos = await TodoModel.findAll();
        return todos.map(todo => Todo.create(todo.dataValues, todo.dataValues.id));
    }
    findById(id: number): Promise<Todo | undefined> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(todo: Todo): Promise<void> {
        throw new Error("Method not implemented.");
    }
}