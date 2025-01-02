import { ConfigService } from "@nestjs/config"
import { User } from "src/users/user.entity";
import { DataSource } from "typeorm";

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'roman1',
    password: '123123',
    entities: [User],
    migrations: ['migrations/**'],
})

