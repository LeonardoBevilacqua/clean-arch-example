import { TodoRepositoryInterface } from "../../../domain/ITodo.repository";
import { Todo } from "../../../domain/Todo.entity";
import { TodoModel } from "./Todo.model";
import { Sequelize } from "sequelize";

export class TodoSequelizeRepository implements TodoRepositoryInterface {
    private todoModel;

    constructor(sequelize: Sequelize) {
        this.todoModel = TodoModel(sequelize)
    }

    async insert(todo: Todo): Promise<Todo> {
        const result = await this.todoModel.create(todo.toJSON());
        return Todo.create(result.dataValues, result.dataValues.id)
    }
    async findAll(): Promise<Todo[]> {
        const todos = await this.todoModel.findAll();
        return todos.map(todo => Todo.create(todo.dataValues, todo.dataValues.id));
    }
    async findById(id: number): Promise<Todo | undefined> {
        const result = await this.todoModel.findByPk(id);
        return result !== null ? Todo.create(result.dataValues, result.dataValues.id) : undefined;
    }
    async delete(id: number): Promise<void> {
        await this.todoModel.destroy({ where: { id } });
    }
    async update(todo: Todo): Promise<void> {
        const result = await this.todoModel.update(todo.toJSON(), { where: { id: todo.id } });
    }
}