import { DataSource, DataSourceOptions } from "typeorm";
import { Config } from '../src/config/config'

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: Config().dbHost,
    port: parseInt(Config().dbPort),
    username: Config().dbUser,
    password: Config().dbPassword,
    database: Config().dbName,
    schema: Config().dbSchema,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;