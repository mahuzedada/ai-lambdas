import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as serverless from 'aws-serverless-express';
import { HelpHopperModule } from './help-hopper.module';

const expressApp = express();
const adapter = new ExpressAdapter(expressApp);

async function bootstrap() {
  const app = await NestFactory.create(HelpHopperModule, adapter, {
    cors: true,
  });
  await app.init();
}

bootstrap();

const server = serverless.createServer(expressApp);

export const handler = (event, context) => {
  serverless.proxy(server, event, context);
};
