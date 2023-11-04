import { Module } from '@nestjs/common';
import { BiteBotController } from './bite-bot.controller';
import { BiteBotService } from './bite-bot.service';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [BiteBotController],
  providers: [BiteBotService],
})
export class BiteBotModule {}
