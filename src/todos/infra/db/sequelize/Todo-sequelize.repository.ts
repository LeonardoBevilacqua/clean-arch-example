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
    async findById(id: number): Promise<Todo | undefined> {
        const result = await TodoModel.findByPk(id);
        return result !== null ? Todo.create(result.dataValues, result.dataValues.id) : undefined;
    }
    async delete(id: number): Promise<void> {
        await TodoModel.destroy({ where: { id } });
    }
    async update(todo: Todo): Promise<void> {
        const result = await TodoModel.update(todo.toJSON(), { where: { id: todo.id } });
    }
}