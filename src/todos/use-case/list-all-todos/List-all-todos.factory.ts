import { SequelizeRepository } from "../../../core/infra/db/sequelize/Sequelize.repository";
import { TodoInMemoryRepository, TodoSequelizeRepository } from "../../infra/db";
import { ListAllTodosController } from "./List-all-todos.controller";
import { ListAllTodosUseCase } from "./List-all-todos.use-case";

export const fabricateListAllTodosController = async () => {
    // config
    const sequelizeConfig = new SequelizeRepository();
    await sequelizeConfig.load();
    // dependencies
    //  const todoRepo = TodoInMemoryRepository.Instance;
    const todoRepo = new TodoSequelizeRepository();
    // use case
    const listAllUseCase = new ListAllTodosUseCase(todoRepo);

    return new ListAllTodosController(listAllUseCase);
}