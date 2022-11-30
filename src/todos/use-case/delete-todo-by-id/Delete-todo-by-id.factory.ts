import { SequelizeRepository } from "../../../core/infra/db/sequelize/Sequelize.repository";
import { TodoSequelizeRepository } from "../../infra/db";
import { DeleteTodoByIdController } from "./Delete-todo-by-id.controller";
import { DeleteTodoByIdUseCase } from "./Delete-todo-by-id.use-case";

export const fabricateDeleteTodoByIdController = async () => {
    // config
    const sequelizeConfig = new SequelizeRepository();
    await sequelizeConfig.load();
    // dependencies
     //const todoRepo = TodoInMemoryRepository.Instance;
    const todoRepo = new TodoSequelizeRepository();
    // use case
    const deleteByIdUseCase = new DeleteTodoByIdUseCase(todoRepo);

    return new DeleteTodoByIdController(deleteByIdUseCase);
}