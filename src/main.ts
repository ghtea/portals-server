import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CLIENT_HOST || '',
    credentials: true
  });
  app.use(cookieParser());

  const swaggerDocumentConfig = new DocumentBuilder()
    .setTitle('Portals')
    .setDescription('The Portals API description')
    .setVersion('0.1')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerDocumentConfig);
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(4000);
}
bootstrap();
