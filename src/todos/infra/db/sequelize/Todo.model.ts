import { DataTypes, Sequelize } from "sequelize";


export const TodoModel = (sequelize: Sequelize) => sequelize.define("todo", {
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
