import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('postgres://clean_arch:clean_arch@192.168.0.5:5432/clean_arch');
export class SequelizeRepository {
    async load() {
        try {
            await sequelize.sync();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}