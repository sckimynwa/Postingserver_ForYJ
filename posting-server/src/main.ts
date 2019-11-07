import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      allowedHeaders: ['Range', 'Authorization', 'Content-Type'],
      exposedHeaders: [
        'Accept-Ranges',
        'Content-Range',
        'Content-Encoding',
        'Content-Length',
      ],
    },
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
