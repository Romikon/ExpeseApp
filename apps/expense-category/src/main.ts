import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8035);
  console.log('NestJS app running on http://127.0.0.1:8035');
}
bootstrap();
