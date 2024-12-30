import { NestFactory } from '@nestjs/core';
import { UserModule } from './users/user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(8020);
  console.log('NestJS app running on http://127.0.0.1:8020');
}
bootstrap();
