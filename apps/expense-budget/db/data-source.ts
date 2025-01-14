import { DataSource, DataSourceOptions } from "typeorm";
import config from '../src/config/config'

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: config.dbHost,
    port: parseInt(config.dbPort),
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    schema: config.dbSchema,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;