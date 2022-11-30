import { DataTypes } from "sequelize";
import { sequelize } from "../../../../core/infra/db/sequelize/Sequelize.repository";


export const TodoModel = sequelize.define("todo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    day: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reminder: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});
