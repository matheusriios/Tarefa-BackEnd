import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

//options for cors midddleware
const options: cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],  
  methods: "GET, HEAD, OPTIONS, PUT, PATCH, POST, DELETE",
  origin: "*",
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.use(cors(options));
  await app.listen(3001);
}

bootstrap();
